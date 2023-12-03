import { PartialType } from '@nestjs/mapped-types';
import { EmployeDto } from './create-employe.dto';
export class UpdateEmployeDto extends PartialType(EmployeDto  ) {}
