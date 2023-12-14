import { Injectable } from '@nestjs/common';
import { CreateDriverInput } from './dto/create-driver.input';
import { UpdateDriverInput } from './dto/update-driver.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverModel } from './models/drivers.model';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(DriverModel)
    private driverRepository: Repository<DriverModel>,
  ) {}
  create(createDriverInput: CreateDriverInput) {
    return this.driverRepository.save(createDriverInput)
  }

  findAll() {
    return this.driverRepository.find();
  }

  findOne(name: string) {
    return this.driverRepository.findOne({ where: { name: name}});
  }

  update(id: string, updateDriverInput: UpdateDriverInput) {
    return this.driverRepository.update(id, updateDriverInput)
  }

  remove(id: string) {
    return this.driverRepository.delete(id);
  }
}
