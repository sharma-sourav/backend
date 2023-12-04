import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class UploadService {
  private readonly s3client: S3Client;

  constructor(private readonly configService: ConfigService) {
    this.s3client = new S3Client({
      region: this.configService.getOrThrow('AWS_S3_REGION'),
    });
  }

  async upload(fileName: string, file: Buffer) {
    const response = await this.s3client.send(
      new PutObjectCommand({
        Bucket: 'nestimg',
        Key: fileName,
        Body: file,
      }),
    );
    console.log('response', response);
  }
}
