import { IsEnum, IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export class CreateUserDTO {
  @IsString({
    message: 'Name must be a string',
  })
  @IsNotEmpty({
    message: 'Name should not be empty',
  })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN', 'ENGINEER', 'INTERN'], {
    message: 'Role must be one of ADMIN, ENGINEER, or INTERN',
  })
  role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}
