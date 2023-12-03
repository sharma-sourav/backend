import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'Unknown'})
  firstname: string;

  @Column({ default: 'Unknown'})
  lastname: string;

  @Column({ default: 'Unknown'})
  email: string;

  @Column({ default: 'Unknown'})
  password: string;

  
}