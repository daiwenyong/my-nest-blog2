import { IsNotExistsRule } from '../../common/rules/is-not-exists.rule'
import { IsExistsRule } from '../../common/rules/is-exists.rule'
import { IsNotEmpty } from 'class-validator'
// import { IsNotExistsRule } from 'src/common/rules/is-exists.rule'
export class UpdateCategoryDto {
    @IsNotEmpty({ message: 'id不能为空' })
    @IsExistsRule('category', { message: 'id不存在' },true)
    id: number
    @IsNotEmpty({ message: 'title不能为空' })
    @IsNotExistsRule('category', { message: '分类已存在' })
    title: string
}
