import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { DriversService } from '@drivers/drivers.service';
import { TripsService } from '@trips/trips.service';
import { CreateTripDto } from '@trips/dto/create-trip.dto';
// import { UpdateTripDto } from './dto/update-trip.dto';

@Controller('trips')
export class TripsController {
  constructor(
    private readonly tripsService: TripsService,
    private readonly driversService: DriversService,
  ) {}

  @Post()
  create(@Body() createTripDto: CreateTripDto) {
    const drivers = this.driversService.findAll();

    if (!createTripDto.nameDriver) {
      const availableDrivers = drivers
        .filter((driver) => driver.isAvailable)
        .map((driver) => driver.name);

      return this.tripsService.create({
        nameDriver: availableDrivers[0],
        actualLocation: createTripDto.actualLocation,
        destiny: createTripDto.destiny,
      });
    }

    return this.tripsService.create(createTripDto);
  }

  @Get()
  async findAll() {
    return this.tripsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTripDto: UpdateTripDto) {
  //   return this.tripsService.update(+id, updateTripDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tripsService.remove(+id);
  // }
}
