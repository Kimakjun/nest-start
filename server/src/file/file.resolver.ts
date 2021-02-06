import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { AddFileResponse } from './dto/addFile.dto';
import { StorageService } from 'src/storage/storage.service';

@Resolver()
export class FileResolver {
  constructor(private readonly strageService: StorageService) {}

  @Mutation((returns) => AddFileResponse)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  ): Promise<AddFileResponse> {
    const ext = file.filename.match(/\.[a-zA-Z]+$/);
    const filename = `${new Date().getTime().toString()}${ext}`;
    const url = await this.strageService.upload({ ...file, filename });
    return { result: 'success', url: url };
  }
}
