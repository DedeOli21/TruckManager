import { Injectable } from '@nestjs/common';
import { DriverModel } from './models/drivers.model';
import { CreateDriverDto } from './dto/create-driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(DriverModel)
    private driverRepository: Repository<DriverModel>,
  ) {}

  mockDrivers = [
    { name: 'Jose Moacir', isAvailable: false },
    { name: 'Reinaldo', isAvailable: true },
    { name: 'teste', isAvailable: true },
    { name: 'fretado', isAvailable: true },
  ];

  create(dataDriver: CreateDriverDto): Promise<DriverModel> {
    return this.driverRepository.save(dataDriver)
  }

  async findAll(): Promise<DriverModel[]> {
    return this.driverRepository.find()
  }

  async findOne(nameDriver: string): Promise<DriverModel> {
    return this.driverRepository.findOne({ where: { name: nameDriver }})
  }

  update() {
    return `This action updates a driver`;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
