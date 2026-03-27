import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ 
    description: 'Mensaje de validación de token', 
    example: 'Token válido, acceso permitido' 
  })
  message: string;
  
  @ApiProperty({ 
    description: 'ID del usuario autenticado', 
    example: 'uuid-del-usuario' 
  })
  userId: string;
}