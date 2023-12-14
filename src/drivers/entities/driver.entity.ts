import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Driver {
  @Field(() => String, { description: 'id' })
  id: string;

  @Field(() => String, { description: 'Nome do motorista' })
  name: string;

  @Field(() => String, { description: 'cnh do motorista' })
  cnh: string;

  @Field(() => Boolean, { description: 'Disponivel' })
  avaliable: boolean;

  @Field(() => Date, { description: 'ultima viagem' })
  last_trip: Date;
}
