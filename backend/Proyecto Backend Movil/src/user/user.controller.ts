import { Controller, Post, Body, Get, Param } from '@nestjs/common'; 
import { UsuarioService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'; 
import { LoginUserDto } from './dto/login-user.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Post('register')
    async register(@Body() createDto: CreateUserDto) {
        return this.usuarioService.register(createDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginUserDto) {
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
