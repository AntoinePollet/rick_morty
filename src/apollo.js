import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql'
})

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
})

export default new VueApollo({
    defaultClient: apolloClient
})

