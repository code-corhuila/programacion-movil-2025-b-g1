import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  private readonly saltRounds = 10;

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, this.saltRounds);
    createUserDto.password = hashedPassword;
    const user = await this.user.create({
      data: createUserDto,
    });
    return user;
  }

  async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  findAll() {
    return this.user.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    })
  }

  findOne(id: string) {
    return this.user.findFirst({
      where: {id}
    })
  }
  findByUseremail(email: string){
    return this.user.findFirst({
      where: {email}
    })
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    
    const dataToUpdate = { ...updateUserDto };
    if (dataToUpdate.password) {
      const hashedPassword = await bcrypt.hash(dataToUpdate.password, this.saltRounds);
      dataToUpdate.password = hashedPassword;
    } else {
      delete dataToUpdate.password;
    }
    return this.user.update({
      where: { id },
      data: dataToUpdate,
    });
  }

  remove(id: string) {
    return this.user.delete({
      where: {id}
    })
  }
}
