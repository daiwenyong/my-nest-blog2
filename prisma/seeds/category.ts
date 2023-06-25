import { Random } from 'mockjs'
import { created } from './helper'
import { PrismaClient } from '@prisma/client'
export async function category() {
    await created(10, async (prisma: PrismaClient) => {
        await prisma.category.create({
            data: {
                title: Random.string()
            }
        })
    })
}
