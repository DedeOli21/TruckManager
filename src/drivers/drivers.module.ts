import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { DriversResolver } from './drivers.resolver';
import { DriverModel } from './models/drivers.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DriversController],
  imports: [TypeOrmModule.forFeature([DriverModel])],
  providers: [DriversService, DriversResolver],
  exports: [DriversService],
})
export class DriversModule {}
