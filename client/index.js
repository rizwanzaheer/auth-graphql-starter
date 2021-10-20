import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface} from "apollo-client";
import { ApolloProvider } from "react-apollo";

cosnt networkInterface = new createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Auth Starter</div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
