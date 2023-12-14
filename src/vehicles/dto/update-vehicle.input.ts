import { CreateVehicleInput } from './create-vehicle.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVehicleInput extends PartialType(CreateVehicleInput) {
  @Field(() => String, { description: 'Id' })
  id: string;
  
  @Field(() => String, { description: 'Modelo do veiculo' })
  model_vehicle: string;

  @Field(() => String, { description: 'Tipo do veiculo' })
  type_vehicle: string;

  @Field(() => Boolean, { description: 'Disponivel' })
  avaliable: boolean;
}
