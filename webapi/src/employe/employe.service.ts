import { Injectable } from '@nestjs/common';
import { EmployeDto } from './employedto/create-employe.dto';
import { UpdateEmployeDto } from './employedto/update-employe';
import { InjectRepository } from '@nestjs/typeorm';
import { Employe } from './employeentity/employe.entity';
import { Repository } from 'typeorm';




@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employe)
    private readonly userRepository:Repository<Employe>,   
  )
  {}
   
  
  create(createEmployeDto: EmployeDto) {
    // return this.userRepository.create(createUserDto);/
    const Employee = this.userRepository.create(createEmployeDto);
    return this.userRepository.save(Employee);
  }
  
  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }
 
  update(id: number, updateEmployeDto: UpdateEmployeDto) {
    return this.userRepository.update(id,updateEmployeDto );
    // await this.userRepository.update(id, updateUserDto);
    // return this.userRepository.findOne(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
  
  async findByEmail(email: string): Promise<Employe | undefined> {
    return this.userRepository.findOne( { where: { email }  });
  }
}
