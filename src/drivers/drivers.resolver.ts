import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CreateDriverDto } from './dto/create-driver.dto';
import { DriverModel } from './models/drivers.model';
import { DriversService } from './drivers.service';

const pubSub = new PubSub();

@Resolver(of => DriverModel)
export class DriversResolver {
  constructor(private readonly driversService: DriversService) {}

  @Query(returns => DriverModel)
  async driver(@Args('id') id: string): Promise<DriverModel> {
    const driver = await this.driversService.findOne(id);
    if (!driver) {
      throw new NotFoundException(id);
    }
    return driver;
  }

  @Query(returns => [DriverModel])
  drivers(): Promise<DriverModel[]> {
    return this.driversService.findAll();
  }

  @Mutation(returns => DriverModel)
  async addDriver(
    @Args('newDriverData') newDriverData: CreateDriverDto,
  ): Promise<DriverModel> {
    const driver = await this.driversService.create(newDriverData);
    pubSub.publish('driverAdded', { driverAdded: driver });
    return driver;
  }

  @Mutation(returns => Boolean)
  async removeDriver(@Args('id') id: string) {
    return this.driversService.remove(id);
  }

  @Subscription(returns => DriverModel)
  driverAdded() {
    return pubSub.asyncIterator('driverAdded');
  }
}