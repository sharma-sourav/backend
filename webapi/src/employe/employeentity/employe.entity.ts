import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employe {
  @PrimaryGeneratedColumn()
 id: number;

  @Column({ default: 'Unknown'})
  name: string;

  @Column({ default: 'Unknown'})
  email: string;

  @Column({ default: 'Unknown'})
  phone: string;

  @Column({ default: 'Unknown'})
  experience: string;
  
  @Column({ default: 'Unknown'})
  skill: string;

  @Column({ default: 'Unknown'})
  company: string;

  @Column({ default: 'Unknown'})
  freelancer: string;
  
  @Column({ default: 'Unknown'})
  imglink: string;
  
}