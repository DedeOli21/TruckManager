import { Injectable } from '@nestjs/common';

@Injectable()
export class DriversService {
  mockDrivers = [
    { name: 'Jose Moacir', isAvailable: false },
    { name: 'Reinaldo', isAvailable: true },
    { name: 'teste', isAvailable: true },
    { name: 'fretado', isAvailable: true },
  ];

  create() {
    return 'This action adds a new driver';
  }

  findAll() {
    console.log('to aqui');
    return this.mockDrivers;
  }

  findOne(nameDriver: string) {
    const dataDriver = this.mockDrivers.filter(
      (driver) => driver.name.toLowerCase() === nameDriver.toLowerCase(),
    );
    if (dataDriver.length == 0) return 'dont find driver';

    return `This action returns excelent #${dataDriver}`;
  }

  update() {
    return `This action updates a driver`;
  }

  remove() {
    return `This action removes a driver`;
  }
}
