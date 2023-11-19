import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [DriversModule, TripsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
