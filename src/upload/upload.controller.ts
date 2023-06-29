import { Controller, Post, UnsupportedMediaTypeException, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('upload')
export class UploadController {
    @Post('/image')
    @UseInterceptors(
        FileInterceptor('file', {
            // limits: Math.pow(1024, 2),
            fileFilter: (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
                // console.log(file.mimetype) // image/png
                if (!file.mimetype.includes('image')) {
                    callback(new UnsupportedMediaTypeException('文件类型错误'), false)
                } else {
                    callback(null, true)
                }
            }
        })
    )
    image(@UploadedFile() file: Express.Multer.File) {
        // console.log(file.path)
        return `http://localhost:3000/${file.path}`
    }
}
