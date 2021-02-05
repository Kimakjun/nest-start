import { Module } from '@nestjs/common';
import { Upload } from 'src/upload/scalar';
import { FileResolver } from './file.resolver';

@Module({
  imports: [Upload],
  providers: [FileResolver],
})
export class FileModule {}
