import { Module } from '@nestjs/common';
import { Upload } from 'src/scalar/scalar';
import { StorageModule } from 'src/storage/storage.module';
import { FileResolver } from './file.resolver';

@Module({
  imports: [Upload, StorageModule],
  providers: [FileResolver],
})
export class FileModule {}
