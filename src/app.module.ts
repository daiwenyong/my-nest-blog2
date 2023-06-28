import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module'
import { PrismaModule } from './prisma/prisma.module'
// import { AuthService } from './auth/auth.service'
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [
        PrismaModule,
        CategoryModule,
        PrismaModule,
        ArticleModule,
        ConfigModule.forRoot({
            isGlobal: true
        }),
        AuthModule
    ],
    controllers: []
    // providers: [AuthService]
})
export class AppModule {}
