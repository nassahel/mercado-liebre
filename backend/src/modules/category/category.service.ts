import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const categoryExist = await this.prisma.category.findUnique({
        where: {
          name: createCategoryDto.name
        }
      })
      if (categoryExist) throw new ConflictException('La categoria ya existe');

      await this.prisma.category.create({
        data: createCategoryDto
      })
      return { message: 'Categoria creada!' }

    } catch (error) {
      console.error('No se pudo crear la categoria', error)
      throw new InternalServerErrorException('No se pudo crear la categoria 2')
    }
  }

  findAll() {
    try {
      const allCategories = this.prisma.category.findMany()
      return allCategories
    } catch (error) {
      return {
        message: 'no se pudo obtener las categorias',
        error
      }
    }
  }

  async GetCategoryAndProducts(id: string) {
    try {
      const categoryFound = await this.prisma.category.findUnique({
        where: {
          id
        },
        include: {
          product: true
        }
      })
      return categoryFound;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('No se pudo obtener las categorias')
    }
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  async remove(id: string) {
    try {
      const foundItem = await this.prisma.category.findUnique({
        where: {
          id
        }
      })
      if (!foundItem) throw new NotFoundException('No se encontro el elemento')
      await this.prisma.category.delete({
        where: {
          id
        }
      })
      return {message: 'Elemento borrado!'}
    } catch (error) {
      throw new InternalServerErrorException('No se pudo eliminar el elemento')
    }
  }
}
