import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }


  async findAll() {
    try {
      const allUsers = await this.prisma.user.findMany();
      if (allUsers.length === 0) throw new NotFoundException('No se encontraron usuarios');
      return allUsers
    } catch (error) {
      console.error('No se pudo obtener usuarios', error);
      throw new InternalServerErrorException('No se pudo obtener usuarios')
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
