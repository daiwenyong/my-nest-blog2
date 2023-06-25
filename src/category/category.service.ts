import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto copy'

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}
    async created(createCategoryDto: CreateCategoryDto) {
        return this.prisma.category.create({
            data: createCategoryDto
        })
    }
    async update(updateCategoryDto: UpdateCategoryDto) {
        const { id, ...data } = updateCategoryDto
        return this.prisma.category.update({
            where: { id: +id },
            data
        })
    }
    async getList() {
        const list = await this.prisma.category.findMany()
        return list
    }
    async getDetail(id) {
        const find = await this.prisma.category.findUnique({
            where: {
                id
            }
        })
        console.log(find)
        return find
    }
    async delete(id) {
        return await this.prisma.category.delete({ where: { id } })
    }
}
