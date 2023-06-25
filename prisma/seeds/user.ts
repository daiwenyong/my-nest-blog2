import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
import { created } from './helper'
export async function user() {
    created(15, async (prisma: PrismaClient) => {
        await prisma.user.create({
            data: {
                // email: Random.email(),
                userName: Random.name(),
                password: Random.string(),
                avatar: Random.image(),
            },
        })
    })
}
