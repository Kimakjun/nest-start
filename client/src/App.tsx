import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Form from "./route/Form";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

import PageNation from "./route/PageNation";
import ImageUpload from "./route/ImageUpload";

const App: FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/pagination" component={PageNation} />
        <Route exact path="/imageUpload" component={ImageUpload} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
