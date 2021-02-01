import { Query, Args, Resolver, Mutation } from '@nestjs/graphql';
import { totalmem } from 'os';
import { AddFeedsResponse, AddFeedRequest } from './dto/addFeed.dto';
import { GetFeedRequest, GetFeedsResponse } from './dto/getFeeds.dto';
import { FeedService } from './feed.service';

@Resolver()
export class FeedResolver {
  constructor(private readonly feedService: FeedService) {}

  @Query((returns) => GetFeedsResponse)
  async getFeeds(
    @Args('input') input: GetFeedRequest,
  ): Promise<GetFeedsResponse> {
    const feeds = await this.feedService.getFeeds(input.page);
    const total = await this.feedService.getTotal();

    return { result: 'success', feeds: feeds, total: total };
  }

  @Mutation((returns) => AddFeedsResponse)
  async addFeed(
    @Args('input') input: AddFeedRequest,
  ): Promise<AddFeedsResponse> {
    const feed = await this.feedService.addFeed(input);
    return { result: 'success', feed: feed };
  }
}
