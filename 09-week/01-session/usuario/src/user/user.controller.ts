import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dto/UserResponse.dto';

@ApiTags('Gestión_de_Usuarios') 
@Controller('usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Crear usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado correctamente.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar usuarios' })
  @ApiOkResponse({ 
    description: 'Devuelve lista de usuarios REALES de la base de datos.', 
    type: UserResponseDto, 
    isArray: true 
  })
  @ApiResponse({ status: 200, description: 'Devuelve lista de usuarios.' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener usuario por ID' })
  @ApiResponse({ status: 200, description: 'Devuelve un usuario.' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar datos de usuario' })
  @ApiResponse({ status: 200, description: 'Devuelve el usuario actualizado.' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) { 
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar usuario' })
  @ApiResponse({ status: 200, description: 'Devuelve el usuario Eliminado.' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
