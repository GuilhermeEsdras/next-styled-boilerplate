import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@styles/global';
import theme from '@styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Esdras Proj Initialzer</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
