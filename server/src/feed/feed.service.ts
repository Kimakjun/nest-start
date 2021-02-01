import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddInputRequest } from './dto/addFeed.dto';
import { getFeedRequest } from './dto/getFeeds.dto';
import { Feed, FeedDocument } from './feed.schema';

@Injectable()
export class FeedService {
  constructor(
    @InjectModel(Feed.name) private readonly feedModel: Model<FeedDocument>,
  ) {}

  async addFeed(input: AddInputRequest): Promise<Feed> {
    const feed = await this.feedModel.create(input);
    return feed;
  }

  async getFeeds(page: number): Promise<[Feed] | any> {
    const hidePost = page === 1 ? 0 : (page - 1) * 10;
    const feeds = await this.feedModel
      .find({})
      .sort({ _id: -1 })
      .skip(hidePost)
      .limit(10);
    return feeds;
  }
}
