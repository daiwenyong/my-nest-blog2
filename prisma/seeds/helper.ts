import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function created(count: number, callback: (prisma: PrismaClient) => Promise<void>) {
    for (let i = 0; i < count; i++) {
        await callback(prisma)
    }
}
