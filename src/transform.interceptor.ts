import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { map } from 'rxjs/operators'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            map((data) => {
                return {
                    code: data?.code !== undefined ? data.code : 1,
                    message: data?.message ? data.message : '请求成功',
                    data: data?.data ? data.data : data
                }
            })
        )
    }
}
