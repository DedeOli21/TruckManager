import { Injectable } from '@nestjs/common';
import { CreateVehicleInput } from './dto/create-vehicle.input';
import { UpdateVehicleInput } from './dto/update-vehicle.input';
import { Vehicle } from './entities/vehicle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleModel } from './models/vehicle.model';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(VehicleModel)
    private vehicleRepository: Repository<VehicleModel>,
  ) {}
  
  create(createVehicleInput: CreateVehicleInput) {
    let response = this.vehicleRepository.save(createVehicleInput)
    return response;
  }

  findAll() {
    return this.vehicleRepository.find()
  }

  findOne(id: string) {
    return this.vehicleRepository.findOne({ where: { id: id}});
  }

  update(id: string, updateVehicleInput: UpdateVehicleInput) {
    return this.vehicleRepository.update(id, updateVehicleInput);
  }

  remove(id: string) {
    return this.vehicleRepository.delete(id);
  }
}
