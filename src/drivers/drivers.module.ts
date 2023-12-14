import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversResolver } from './drivers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModel } from './models/drivers.model';

@Module({
  providers: [DriversResolver, DriversService],
  imports: [TypeOrmModule.forFeature([DriverModel])],
})
export class DriversModule {}
