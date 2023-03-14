import { IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;
}
