import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtStrategy } from './strategy/jwt.strategy'

@Module({
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    imports: [
        JwtModule.register({
            secret: 'davion'
        })
        // JwtModule.register({
        //     imports: [ConfigModule],
        //     inject: [ConfigService],
        //     useFactory: (config: ConfigService) => {
        //         return {
        //             secret: config.get('TOKEN_SECRET'),
        //             signOptions: {
        //                 expiresIn: config.get('TOKEN_EXPIRES')
        //             }
        //         }
        //     }
        // })
    ]
})
export class AuthModule {}
