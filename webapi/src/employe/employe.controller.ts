import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { EmployeDto as EmployeeDto } from './employedto/create-employe.dto';
import { UpdateEmployeDto } from './employedto/update-employe';
import { EmployeService } from './employe.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';
import { Employe as Employee } from './employeentity/employe.entity';

@Controller('employe')
export class EmployeController {
  constructor(
    private employeService: EmployeService,
    private uploadService: UploadService,
  ) {}

  @Post('/Add')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() employeeDto: EmployeeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const employeemail = employeeDto.email;
    const originalname = file.originalname;
    // const filenameWithoutExtension = originalname.slice(0, originalname.lastIndexOf('.'));
    const fileExtension = originalname.slice(originalname.lastIndexOf('.'));

    const newFilename = `${employeemail}.${fileExtension}`;
    await this.uploadService.upload(newFilename, file.buffer);
    const employee = employeeDto as Employee;
    console.log(newFilename);
    employee.imglink =
      'https://nestimg.s3.ap-south-1.amazonaws.com/' + newFilename;
    return this.employeService.create(employee);
  }

  @Get('/allemploye')
  findAll() {
    return this.employeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeService.findOne(+id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @Body() updateEmployeDto: UpdateEmployeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {

    // Check if a file is provided
    if (file) {
      // Upload the new file
    
      const employeemail = updateEmployeDto.email;
      const originalname = file.originalname;
      // const filenameWithoutExtension = originalname.slice(0, originalname.lastIndexOf('.'));
      const fileExtension = originalname.slice(originalname.lastIndexOf('.'));

      const newFilename = `${employeemail}.${fileExtension}`;
      await this.uploadService.upload(newFilename, file.buffer);

      const updatedEmployee = {
        ...updateEmployeDto,
        imglink: 'https://nestimg.s3.ap-south-1.amazonaws.com/' + newFilename,
      };

      return this.employeService.update(+id, updatedEmployee);
    } else {
      return this.employeService.update(+id, updateEmployeDto);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeService.remove(+id);
  }
}
