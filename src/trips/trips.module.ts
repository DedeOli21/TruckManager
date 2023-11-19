import { Module } from '@nestjs/common';
import { TripsService } from '@trips/trips.service';
import { TripsController } from '@trips/trips.controller';
import { DriversModule } from '@drivers/drivers.module';

@Module({
  imports: [DriversModule],
  controllers: [TripsController],
  providers: [TripsService],
})
export class TripsModule {}
