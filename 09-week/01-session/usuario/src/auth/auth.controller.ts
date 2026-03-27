import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthResponseDto } from './dto/auth-response.dto';

@ApiTags('Gestión_de_Usuarios') 
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {} 
  @Post('login')
  @ApiOperation({ summary: 'Inicia sesión y genera un Token JWT' })
  @ApiResponse({ status: 200, description: 'Token Generado' })
  async login(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto.email, createAuthDto.password);
  }
  
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Verificación de Token' })
  @ApiOkResponse({ 
        description: 'Token Válido, devuelve información del usuario.', 
        type: AuthResponseDto 
    }) 
  @ApiBearerAuth('access-token')
  getProfile() {
    return { message: 'Token válido, acceso permitido' };
  }
}