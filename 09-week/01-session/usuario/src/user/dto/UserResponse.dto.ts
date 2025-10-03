import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ 
    description: 'Identificador único del usuario', 
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef' 
  })
  id: string;

  @ApiProperty({ 
    description: 'Nombre completo del usuario', 
    example: 'Camilo Giraldo' 
  })
  name: string;

  @ApiProperty({ 
    description: 'Correo electrónico del usuario', 
    example: 'camilo@gmail.com' 
  })
  email: string;
  
  // Puedes omitir la contraseña para el DTO de respuesta.
}