import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({ example: 'camilo@gmail.com', description: 'Correo electrónico único' })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
    @ApiProperty({ example: 'Camilo123', description: 'Contraseña del usuario' })
    @IsString()
    @IsNotEmpty()
    password: string
}
