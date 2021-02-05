import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const URI = "http://localhost:5000";

const link = createUploadLink({
  uri: `${URI}/graphql`,
  credentials: "include",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
