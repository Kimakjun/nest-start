import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const URI = "http://localhost:5000";

const link = new HttpLink({
  uri: `${URI}/graphql`,
  credentials: "include",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
