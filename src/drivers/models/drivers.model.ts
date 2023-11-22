import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@ObjectType({ description: 'driver' })
@Entity()
export class DriverModel {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Directive('@upper')
  @Column({ length: 500, nullable: false })
  name: string;

  @Field({ nullable: true })
  @Column({ length: 500, nullable: true })
  vehicle?: string;

  @Field({ nullable: true })
  @CreateDateColumn()
  @Column()
  lastTrip?: Date;

  @Field((type) => Boolean)
  avaliable: Boolean;
}


