import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module'
import { PrismaModule } from './prisma/prisma.module'
// import { AuthService } from './auth/auth.service'
import { AuthModule } from './auth/auth.module'
import { UploadModule } from './upload/upload.module'
// import { ServeStaticModule } from '@nestjs/platform-express'
// import { join } from 'path'

@Module({
    imports: [
        PrismaModule,
        CategoryModule,
        PrismaModule,
        ArticleModule,
        ConfigModule.forRoot({
            isGlobal: true
        }),
        AuthModule,
        UploadModule
        // ServeStaticModule.forRoot({
        //     rootPath: join(__dirname, '..', 'public') // 静态资源目录的路径
        // })
    ],
    controllers: []
    // providers: [AuthService]
})
export class AppModule {}
