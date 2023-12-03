import { S3Client ,PutObjectCommand} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';


@Injectable()
export class UploadService {    
    private readonly    s3clint = new S3Client({
        region:this.configService.getOrThrow('AWS_S3_REGION'),
    }); 
    constructor(private readonly configService:ConfigService){}
    async upload(fileName: string, file: Buffer ,){
        const response = await this.s3clint.send(
            new PutObjectCommand({
                Bucket:'nestimg',
                Key: fileName,
                Body: file,
            }),
        );
        console.log('response' + response)
    }
}
