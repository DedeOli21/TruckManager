import { CreateDriverInput } from './create-driver.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDriverInput extends PartialType(CreateDriverInput) {
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
