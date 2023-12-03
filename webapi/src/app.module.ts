import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Users } from './user/entities/user.entity';
import { EmployeModule } from './employe/employeentity/employe.module';
import { Employe } from './employe/employeentity/employe.entity';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';




@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'sourav123',
    database:'usersignup',
    entities:[Users,Employe],
    synchronize:true  
  }), UserModule,EmployeModule, UploadModule,ConfigModule.forRoot({isGlobal:true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
