import { Module } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripsResolver } from './trips.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripModel } from './models/trip.model';

@Module({
  providers: [TripsResolver, TripsService],
  imports: [TypeOrmModule.forFeature([TripModel])],
})
export class TripsModule {}
