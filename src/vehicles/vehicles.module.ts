import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesResolver } from './vehicles.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleModel } from './models/vehicle.model';

@Module({
  providers: [VehiclesResolver, VehiclesService],
  imports: [TypeOrmModule.forFeature([VehicleModel])],
})
export class VehiclesModule {}
