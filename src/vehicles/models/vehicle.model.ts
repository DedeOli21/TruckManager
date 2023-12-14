import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@ObjectType({ description: 'vehicle' })
@Entity()
export class VehicleModel {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500, nullable: false })
  model_vehicle: string;

  @Field({ nullable: true })
  @Column({ length: 500 })
  type_vehicle: string;

  @Field((type) => Boolean)
  @Column({ nullable: false })
  avaliable: Boolean;
}


