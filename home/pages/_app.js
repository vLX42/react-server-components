import Head from "next/head";

import "../styles/global.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React Server vs Client Components </title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-2xl pb-5">React Server vs Client Components</h1>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
