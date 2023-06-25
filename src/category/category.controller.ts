import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto copy'

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}
    @Post()
    created(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.created(createCategoryDto)
    }
    @Patch()
    update(@Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoryService.update(updateCategoryDto)
    }
    @Get()
    getCategory() {
        return this.categoryService.getList()
    }
    @Get(':id')
    getDetail(@Param('id') id: string) {
        return this.categoryService.getDetail(+id)
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.categoryService.delete(+id)
    }
}
