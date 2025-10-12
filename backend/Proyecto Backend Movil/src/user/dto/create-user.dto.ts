import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail({}, { message: 'El correo electrónico no es válido.' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  password: string;
}