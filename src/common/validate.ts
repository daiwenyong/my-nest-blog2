import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common'
import { ValidationError } from 'class-validator'

export default class Validate extends ValidationPipe {
    protected flattenValidationErrors(validationErrors: ValidationError[]): string[] {
        const first = validationErrors[0].constraints
        const msg = Object.values(first)[0]
        console.log(validationErrors)
        // validationErrors.forEach((error) => {
        //     // messages[error.property] = Object.values(error.constraints)[0]
        // })

        throw new HttpException(
            {
                code: 400,
                messages: msg
            },
            HttpStatus.UNPROCESSABLE_ENTITY
        )
    }
}
