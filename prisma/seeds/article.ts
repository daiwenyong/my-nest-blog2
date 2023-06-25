import { Random } from 'mockjs'
import { created } from './helper'
import { PrismaClient } from '@prisma/client'
import _ from 'lodash'
export async function article() {
    created(30, async (prisma: PrismaClient) => {
        await prisma.article.create({
            data: {
                title: Random.string(),
                content: Random.cparagraph(),
                // categoryId: Math.ceil(Math.random() * 10),
                categoryId: _.random(1, 10)
            }
        })
    })
}
