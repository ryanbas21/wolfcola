import type { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import "prismjs/themes/prism-tomorrow.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;