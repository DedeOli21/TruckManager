import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString } from "class-validator";

@InputType()
export class CreateDriverDto {
    id: string

    @IsString()
    name: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    vehicle?: string;

    @IsOptional()
    @IsString()
    lastTrip?: string;

    @IsBoolean()
    avaliable: boolean;

}
