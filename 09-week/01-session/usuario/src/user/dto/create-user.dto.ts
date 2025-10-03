import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: 'Camilo Giraldo', description: 'Nombre del usuario' })
  @IsString()
  name: string;
  @ApiProperty({ example: 'camilo@gmail.com', description: 'Correo electrónico único' })
  @IsString()
  @IsEmail()
  email: string; 
  @ApiProperty({ example: 'Camilo123', description: 'Contraseña del usuario' })
  @IsString()
  password: string;
}
