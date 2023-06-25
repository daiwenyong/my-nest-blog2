import { PrismaClient } from '@prisma/client'
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

//表字段是否存在 登录时候的用户名校验
export function IsExistsRule(table: string, validationOptions?: ValidationOptions,isNum?:boolean) {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'IsExistsRule',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [table],
            options: validationOptions,
            validator: {
                async validate(value: string, args: ValidationArguments) {
                    const prisma = new PrismaClient()
                    const v = isNum ? Number(value) : value
                    const res = await prisma[table].findFirst({
                        where: {
                            [args.property]: v
                        }
                    })
                    return Boolean(res)
                }
            }
        })
    }
}
