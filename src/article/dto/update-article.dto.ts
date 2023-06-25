import { IsExistsRule } from '../../common/rules/is-exists.rule'
import { IsNotEmpty } from 'class-validator'
export class UpdateArticleDto {
    @IsNotEmpty({ message: 'title不能为空' })
    title: string
    @IsNotEmpty({ message: 'content不能为空' })
    content: string
    @IsNotEmpty({ message: '请选择分类' })
    // @IsExistsRule('category', { message: 'category不存在' }, true)
    categoryId: number
    @IsNotEmpty({ message: 'id不能为空' })
    id: number
}
