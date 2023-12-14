import { CreateTripInput } from './create-trip.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTripInput extends PartialType(CreateTripInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { description: 'id do motorista' })
  driver_id: number;

  @Field(() => String, { description: 'Nome do motorista' })
  driver_name: string;

  @Field(() => Int, { description: 'id do veiculo' })
  vehicle_id: number;

  @Field(() => String, { description: 'modelo do veiculo' })
  vehicle_name: string;

  @Field(() => String, { description: 'Id da viagem' })
  id_trip: string;

  @Field(() => String, { description: 'Destino da viagem' })
  destiny_trip: string;

  @Field(() => String, { description: 'Tipo de carga' })
  type_trip: string;

  @Field(() => Int, { description: 'Valor de carga' })
  amount_trip: number;

  @Field(() => Date, { description: 'Data prevista' })
  arrival_forecast: Date;
}
