import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString } from "class-validator";

@InputType()
export class CreateDriverDto {
    id: string

    @IsString()
    @Field()
    name: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    vehicle?: string;

    @IsOptional()
    @IsString()
    @Field({ nullable: true })
    lastTrip?: string;

    @IsBoolean()
    @Field()
    avaliable: boolean;

}
