import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
@Injectable()
export class AppService {
  getHello( sequelize: Sequelize): string {
    return 'Hello World!';
  }
 
}
