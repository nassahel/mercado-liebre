import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) { }

  async register(newUser: CreateUserDto) {
    try {
      // Verificar si el usuario ya existe
      const userExist = await this.prisma.user.findUnique({
        where: {
          email: newUser.email,
        },
      });

      // Si el usuario ya existe, lanzar un error
      if (userExist) {
        throw new HttpException(
          { message: 'El usuario ya existe' },
          HttpStatus.BAD_REQUEST,  // Código 400: Bad Request
        );
      }

      // Crear el usuario en la base de datos
      const createdUser = await this.prisma.user.create({
        data: {
          ...newUser,
          password: await bcrypt.hash(newUser.password, 15),
        },
      });

      // Si no se pudo crear el usuario, lanzar un error
      if (!createdUser) {
        throw new HttpException(
          { message: 'No se pudo crear el usuario' },
          HttpStatus.INTERNAL_SERVER_ERROR, // Código 500: Internal Server Error
        );
      }

      // Devolver el mensaje de éxito si todo salió bien
      return {
        message: 'Usuario creado exitosamente',
        user: createdUser,
      };
    } catch (error) {
      // Lanza la excepción con el mensaje de error, si algo salió mal
      throw new HttpException(
        { message: error.message || 'Error desconocido' },
        HttpStatus.INTERNAL_SERVER_ERROR,  // Código 500 si ocurre cualquier error
      );
    }
  }
}
