import { Controller, Post, Body, Get, Param } from '@nestjs/common'; 
import { UsuarioService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'; 
import { LoginUserDto } from './dto/login-user.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Post('register')
    // Usamos el DTO
    async register(@Body() createDto: CreateUserDto) {
        // 3. Pasar el objeto DTO completo
        return this.usuarioService.register(createDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginUserDto) {
        // 3. Pasar el objeto DTO completo
        return this.usuarioService.login(loginDto);
    }

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(Number(id));
  }
}
