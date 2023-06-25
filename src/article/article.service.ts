import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../prisma/prisma.service'
import { GetArticleDto } from './dto/get-article.dto'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Injectable()
export class ArticleService {
    constructor(private prisma: PrismaService, private config: ConfigService) {}

    async getArticleList(args: GetArticleDto) {
        const defaultPageSize = this.config.get('PAGE_SIZE')
        const page = +args.page || 1
        const pageSize = +args.pageSize || defaultPageSize
        const whereCategory = args.categoryId ? { id: +args.categoryId } : {}

        const data = await this.prisma.article.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
            where: {
                category: whereCategory
            }
        })

        const total = await this.prisma.article.count({
            where: {
                category: whereCategory
            }
        })
        return {
            code: 1,
            data: {
                total,
                page,
                data
            },
            total
        }
    }

    async create(createArticleDto: CreateArticleDto) {
        console.log(+createArticleDto.categoryId)

        const res = await this.prisma.article.create({
            data: {
                title: createArticleDto.title,
                content: createArticleDto.content,
                categoryId: +createArticleDto.categoryId
            }
        })
        return res
    }

    update(updateArticleDto: UpdateArticleDto) {
        const { id, ...data } = updateArticleDto
        data.categoryId = +updateArticleDto.categoryId
        return this.prisma.article.update({
            data,
            where: {
                id: +id
            }
        })
    }

    getDetail(id) {
        return this.prisma.article.findUnique({
            where: {
                id
            }
        })
    }
    delete(id) {
        return this.prisma.article.delete({ where: { id } })
    }
}
