import { Expose, Transform } from 'class-transformer';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  mileage: number;

  // We are adding a new property
  // Take the user.id property from the object and assign to userId
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
