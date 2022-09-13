import { FC } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';

const GRAPHQL_ENDPOINT =
  'https://api-ap-northeast-1.hygraph.com/v2/cl7r8uxx3600s01t7ahch6dj2/master';

export const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export const GraphqlApolloProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => <ApolloProvider client={client}>{children}</ApolloProvider>;
