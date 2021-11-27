import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Esdras Proj Initialzer</title>
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Esdras Next.js Boilerplate | TypeScript, React JS, Styled Components, Jest, Storybook, Husky and ESLint"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
