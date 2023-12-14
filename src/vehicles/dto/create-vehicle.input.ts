import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVehicleInput {
  @Field(() => String, { description: 'Modelo do veiculo' })
  model_vehicle: string;

  @Field(() => String, { description: 'Tipo do veiculo' })
  type_vehicle: string;

  @Field(() => Boolean, { description: 'Disponivel' })
  avaliable: boolean;

}
