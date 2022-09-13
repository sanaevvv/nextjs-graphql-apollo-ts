import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GraphqlApolloProvider } from '../graphql/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphqlApolloProvider>
      <Component {...pageProps} />
    </GraphqlApolloProvider>
  );
}

export default MyApp;
