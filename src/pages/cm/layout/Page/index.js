import React from 'react';
import Head from 'next/head';
import hoistNonReactStatics from 'hoist-non-react-statics';
import idx from 'idx';

import Document from '../../../../components/Document';
import tagManager from '../../../../scripts/tagManager';

import './styles.less';

const FAV_ICON = 'https://cdn.checkd.media/favicons/cm.png';

const Page = ComposedComponent => {
  function Decorator(props) {
    return (
      <Document>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400"
            as="style"
            rel="preload"
          />
          <link rel="shortcut icon" type="image/png" href={FAV_ICON} />
          <link rel="shortcut icon" href={FAV_ICON} />
          <link rel="apple-touch-icon" href={FAV_ICON} />
          <script dangerouslySetInnerHTML={{ __html: tagManager('GTM-TQHW98B') }} />
        </Head>
        <ComposedComponent
          {...props}
          getParam={func => idx(props.url.query, func) || ''}
        />
      </Document>
    );
  }

  hoistNonReactStatics(Decorator, ComposedComponent);

  return Decorator;
};

export default Page;
