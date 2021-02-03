import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Feed, FeedSchema } from './feed.schema';
import { FeedResolver } from './feed.resolvers';
import { FeedService } from './feed.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Feed.name, schema: FeedSchema }]),
  ],
  providers: [FeedResolver, FeedService],
})
export class feedModule {}
