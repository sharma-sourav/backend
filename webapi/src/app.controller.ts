import { Controller, Get,Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Sequelize } from 'sequelize';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}


}
