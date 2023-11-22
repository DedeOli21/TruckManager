import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { DriversResolver } from './drivers.resolver';

@Module({
  controllers: [DriversController],
  providers: [DriversService, DriversResolver],
  exports: [DriversService],
})
export class DriversModule {}
