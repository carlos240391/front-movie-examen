import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from '../styles/global';
import { ThemeProvider } from 'react-bootstrap';
import { prefixes } from '../utils/bootstrapPrefixes';

import Layout from 'src/layouts/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <ThemeProvider prefixes={prefixes}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
