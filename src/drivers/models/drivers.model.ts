import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@ObjectType({ description: 'driver' })
@Entity()
export class DriverModel {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500, nullable: false })
  name: string;

  @Field({ nullable: false })
  @Column({ length: 500 })
  cnh: string;

  @Field((type) => Boolean)
  @Column({ nullable: false })
  avaliable: Boolean;

  @Field((type) => Date)
  @Column({ nullable: true })
  last_trip: Date;
}
