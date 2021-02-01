import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Form from "./route/Form";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

const App: FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
