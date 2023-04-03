import {
  IsNumber,
  IsString,
  IsPositive,
  IsLongitude,
  IsLatitude,
  Min,
  Max,
} from 'class-validator';

export class CreateReportDto {
  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1930)
  @Max(3000)
  year: number;

  @IsLongitude()
  lng: number;

  @IsLatitude()
  lat: number;

  @IsNumber()
  @IsPositive()
  mileage: number;
}
