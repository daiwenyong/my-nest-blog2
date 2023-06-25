import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
// 创建数据
import { article } from './seeds/article'
import { category } from './seeds/category'
import { user } from './seeds/user'

async function created() {
    user()
    await category()
    article()
}
created()
// const prisma = new PrismaClient()
// async function c(){
//    const res = await prisma.user.create({
//         data: {
//             // email: Random.email(),
//             userName: Random.name(),
//             password: Random.string(),
//             avatar: Random.image(),
//         },
//    })
//     console.log(res);
// }
// c()