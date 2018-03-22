import React from 'react';
import Head from 'next/head';
import 'whatwg-fetch';

// next-css issue
import './normalize.less';
import './styles.less';

function Document({ children }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </React.Fragment>
  );
}

export default Document;
