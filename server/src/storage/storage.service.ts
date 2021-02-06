import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { FileUpload } from 'graphql-upload';

@Injectable()
export class StorageService {
  private s3: AWS.S3;
  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_KEY_ACCESS_ID,
    });
  }

  async upload({ createReadStream, filename }: FileUpload): Promise<string> {
    const stream = createReadStream();
    const result = await this.s3
      .upload({ Bucket: process.env.BUCKET_NAME, Key: filename, Body: stream })
      .promise();
    return result.Location;
  }
}
