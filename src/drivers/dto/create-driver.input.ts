import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDriverInput {
  @Field(() => String, { description: 'Nome do motorista' })
  name: string;

  @Field(() => String, { description: 'cnh do motorista' })
  cnh: string;

  @Field(() => Boolean, { description: 'Disponivel' })
  avaliable: boolean;

  @Field(() => Date, { description: 'ultima viagem' })
  last_trip: Date;
}
