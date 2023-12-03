import { PartialType } from '@nestjs/mapped-types';
import { Employee } from './create-employe.dto';
export class UpdateEmployeeDto extends PartialType(Employee) {}
