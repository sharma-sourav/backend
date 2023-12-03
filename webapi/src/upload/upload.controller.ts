import { Controller, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('upload')
export class UploadController {
  constructor (private readonly uploadService: UploadService){}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile(
    new ParseFilePipe({
        validators:[
            // new MaxFileSizeValidator({maxSize:1000}), new FileTypeValidator({fileType:'image/jpeg'}),                             
        ]
    })
  ) file: Express.Multer.File) {
    const test = await this.uploadService.upload(file.originalname,file.buffer);
    console.log(file.originalname);
    const link = "https://nestimg.s3.ap-south-1.amazonaws.com/"+file.originalname;
    console.log("filelink:",link);
    return link;
  }
}
