import React from 'react'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { OneOrMoreChildren } from 'types'

// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://mainnet.graph.telosdreamstack.io/v1/graphql',
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: 'ws://mainnet.graph.telosdreamstack.io/v1/graphql',
  options: {
    reconnect: true,
  },
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink,
)

// create client with inMemoryCache
const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link,
})

export default function GraphQLProvider({ children }: OneOrMoreChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
