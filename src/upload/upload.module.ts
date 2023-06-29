import { Module } from '@nestjs/common'
import { UploadController } from './upload.controller'
import { UploadService } from './upload.service'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'

@Module({
    imports: [
        MulterModule.registerAsync({
            useFactory() {
                return {
                    storage: diskStorage({
                        destination: 'uploads',
                        filename: (req, file, callback) => {
                            const path = Date.now() + '-' + Math.round(Math.random() * 1e10) + extname(file.originalname)
                            callback(null, path)
                        }
                    })
                }
            }
        })
    ],
    controllers: [UploadController],
    providers: [UploadService]
})
export class UploadModule {}
