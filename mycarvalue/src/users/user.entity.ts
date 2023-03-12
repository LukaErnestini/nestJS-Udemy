import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// By convention we will call this User instead of UserEntity.
// This is the only exception where we do it like this
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
