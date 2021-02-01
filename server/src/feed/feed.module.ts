import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Feed, FeedSchema } from './feed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Feed.name, schema: FeedSchema }]),
  ],
  providers: [],
})
export class feedModule {}
