import { createApp } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'https://rickandmortyapi.com/graphql',
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})


createApp(App).use(store).use(router).use(apolloProvider).mount('#app')
