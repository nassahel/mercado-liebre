import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createProductDto: CreateProductDto) {

    const newProduct = await this.prisma.product.create({
      data: createProductDto
    })

    return {
      message: 'Producto creado!',
      newProduct
    };
  }

  async findAllActive() {
    try {
      const allActiveProducts = await this.prisma.product.findMany({
        where: {
          isActive: true
        }
      })
      return allActiveProducts;
    } catch (error) {
      console.log(error);

    }

  }


  async findAll() {
    try {
      const allProducts = await this.prisma.product.findMany()
      return allProducts;
    } catch (error) {
      console.log(error);

    }

  }


  async findByQuery(category: string) {   
    
    try {
      const foundedProducts = await this.prisma.product.findMany({
        where: {
          categoryId: category
        }
      })
      if (foundedProducts.length === 0) throw new NotFoundException('No se encontraron prouctos')
      return foundedProducts;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('No se pudo realizar la consulta')

    }
  }




  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
