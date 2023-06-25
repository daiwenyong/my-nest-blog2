import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { ArticleService } from './article.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) {}

    @Get()
    async getArticle(@Query() args) {
        return this.articleService.getArticleList(args)
    }

    @Post()
    async createArticle(@Body() args) {
        return this.articleService.create(args)
    }

    @Patch()
    update(@Body() updateArticleDto: UpdateArticleDto) {
        return this.articleService.update(updateArticleDto)
    }

    @Get(':id')
    getDetail(@Param('id') id: string) {
        return this.articleService.getDetail(+id)
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.articleService.delete(+id)
    }
}
