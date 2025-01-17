import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {

    @IsString()
    @IsOptional()
    id?: string


    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    name: string;

    @IsString()
    @IsOptional()
    @MaxLength(100)
    description?: string
}
