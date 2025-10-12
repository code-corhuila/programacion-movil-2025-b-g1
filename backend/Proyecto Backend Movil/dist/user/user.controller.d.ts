import { UsuarioService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    register(createDto: CreateUserDto): Promise<{
        message: string;
        user: {
            id: number;
            nombre: string;
            email: string;
            password: string;
            fechaRegistro: Date;
        };
    }>;
    login(loginDto: LoginUserDto): Promise<{
        message: string;
        token: any;
        user: {
            id: number;
            nombre: string;
            email: string;
            password: string;
            fechaRegistro: Date;
        };
    }>;
    findAll(): Promise<{
        id: number;
        nombre: string;
        email: string;
        password: string;
        fechaRegistro: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        nombre: string;
        email: string;
        password: string;
        fechaRegistro: Date;
    }>;
}
