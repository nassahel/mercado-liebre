import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength } from "class-validator";

export class CreateProductDto {

    @IsString({ message: 'El nombre debe ser un string' })
    @MaxLength(50)
    @IsNotEmpty()
    name: string;

    @IsString({ message: 'La descirpcion debe ser un string' })
    @MaxLength(100)
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @Max(100000)
    @IsNotEmpty()
    price: number;


    @IsString({ message: 'La imagen debe ser un string' })
    @MaxLength(200)
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    categoryId: string;

    @IsOptional()
    @IsBoolean()
    isFavorite?: boolean;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
