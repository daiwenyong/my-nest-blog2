import { IsNotExistsRule } from '../../common/rules/is-not-exists.rule'
import { IsNotEmpty } from 'class-validator'
// import { IsNotExistsRule } from 'src/common/rules/is-exists.rule'
export class CreateCategoryDto {
    @IsNotEmpty({ message: 'title不能为空' })
    @IsNotExistsRule('category', { message: '分类已存在' })
    title: string
}
