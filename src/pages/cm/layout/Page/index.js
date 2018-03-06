import React from 'react';
import Head from 'next/head';
import hoistNonReactStatics from 'hoist-non-react-statics';

import Document from '../../../../components/Document';
import tagManager from '../../../../scripts/tagManager';

import './styles.less';

const FAV_ICON = 'https://cdn.checkd.media/favicons/cm.png';

const Page = ComposedComponent => {
  function Decorator(props) {
    const extendedProps = {
      ...props,
    };
    const { url: { query } } = props;
    extendedProps[query.meta.template] = query;

    return (
      <Document>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400"
            as="style"
            rel="preload"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Lato:300,400"
            />
          </noscript>
          <link rel="shortcut icon" type="image/png" href={FAV_ICON} />
          <link rel="shortcut icon" href={FAV_ICON} />
          <link rel="apple-touch-icon" href={FAV_ICON} />
          <script
            dangerouslySetInnerHTML={{ __html: tagManager('GTM-TQHW98B') }}
          />
        </Head>
        <ComposedComponent {...extendedProps} />
      </Document>
    );
  }

  hoistNonReactStatics(Decorator, ComposedComponent);
  return Decorator;
};

export default Page;
