import { Module } from '@nestjs/common';
import { EmployeService } from '../employe.service';
import { EmployeController } from '../employe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employe } from './employe.entity';
import { UploadService } from 'src/upload/upload.service';

@Module({
imports:[TypeOrmModule.forFeature([Employe])],
  controllers: [EmployeController],
  providers: [EmployeService, UploadService],
})
export class EmployeModule {}
