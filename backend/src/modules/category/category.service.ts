import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
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
      return {message: 'Categoria creada!'}

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

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
