import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
    imports: [
        PrismaModule,
        CategoryModule,
        PrismaModule,
        ArticleModule,
        ConfigModule.forRoot({
            isGlobal: true
        })
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
