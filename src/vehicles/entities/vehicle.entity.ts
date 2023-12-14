import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Vehicle {
  @Field(() => String, { description: 'id' })
  id: string;

  @Field(() => String, { description: 'Modelo do veiculo' })
  model_vehicle: string;

  @Field(() => String, { description: 'Tipo do veiculo' })
  type_vehicle: string;

  @Field(() => Boolean, { description: 'Disponivel' })
  avaliable: boolean;
}
