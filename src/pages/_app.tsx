import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Esdras Proj Initialzer</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
