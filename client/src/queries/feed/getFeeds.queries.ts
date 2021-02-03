import { gql } from "@apollo/client";

const GET_FEEDS = gql`
  query GetFeeds($input: InputGetFeed!) {
    getFeeds(input: $input) {
      result
      error
      feeds {
        _id
        content
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export default GET_FEEDS;
