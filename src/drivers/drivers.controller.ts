import { Controller, Get, Post, Param } from '@nestjs/common';
import { DriversService } from './drivers.service';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  create() {
    return this.driversService.create();
  }

  @Get()
  findAll() {
    return this.driversService.findAll();
  }

  @Get(':name')
  findOne(@Param() params: any): string {
    return this.driversService.findOne(params.name);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
  //   return this.driversService.update();
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.driversService.remove(+id);
  // }
}
