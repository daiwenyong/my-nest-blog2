import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import RegisterDto from './dto/register.dto'
import LoginDto from './dto/login.dto'
import { hash, verify } from 'argon2'
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}
    async register(dto: RegisterDto) {
        const { userName, password } = dto
        const user = await this.prisma.user.create({
            data: {
                userName,
                password: await hash(password)
            }
        })
        return user
    }
    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                userName: dto.userName
            }
        })
        return this.token(user)
    }

    private async token({ userName, id }) {
        const token = await this.jwt.signAsync({
            name: userName,
            sub: id
        })
        console.log(token)
        return token
    }
}
