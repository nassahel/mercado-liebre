import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    address: string;

    @IsString()
    @MaxLength(20)
    @IsNotEmpty()
    phone: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    @MinLength(4)
    password: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

}
