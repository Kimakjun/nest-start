import { gql } from "@apollo/client";

const ADD_FEED = gql`
  mutation AddFeed($input: InputAddFeed!) {
    addFeed(input: $input) {
      result
      error
      feed {
        _id
        content
        createdAt
        updatedAt
      }
    }
  }
`;

export default ADD_FEED;
