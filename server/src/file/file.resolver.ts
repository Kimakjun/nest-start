import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { AddFileResponse } from './dto/addFile.dto';

@Resolver()
export class FileResolver {
  @Mutation((returns) => AddFileResponse)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  ): Promise<AddFileResponse> {
    console.log(file);
    return { result: 'true' };
  }
}
