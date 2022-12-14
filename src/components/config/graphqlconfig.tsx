import React from 'react'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

const GqlClient = new ApolloClient<NormalizedCacheObject>({
    uri: 'http://api.spacex.land/graphql',
    cache: new InMemoryCache()

})

export default GqlClient;