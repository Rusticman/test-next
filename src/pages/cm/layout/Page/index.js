import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';
import idx from 'idx';

import Document from '../../../../components/Document';
import tagManager from '../../../../scripts/tagManager';
import store from '../../../../redux';

import styles from './styles.less';

const FAV_ICON = 'https://cdn.checkd.media/favicons/cm.png';

const Page = ComposedComponent => {
  function Decorator(props) {
    const initialState = {
      query: props.url.query,
    };

    return (
      <Document>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400" rel="stylesheet" />
          <link rel="shortcut icon" type="image/png" href={FAV_ICON} />
          <link rel="shortcut icon" href={FAV_ICON} />
          <link rel="apple-touch-icon" href={FAV_ICON} />
          <meta name="theme-color" content="#8DBE36" />
          <script
            dangerouslySetInnerHTML={{ __html: tagManager('GTM-TQHW98B') }}
          />
        </Head>
        <Provider store={store(initialState)}>
          <div className={styles.page}>
            <ComposedComponent
              {...props}
              getParam={func => idx(props.url.query, func) || ''}
            />
          </div>
        </Provider>
      </Document>
    );
  }

  hoistNonReactStatics(Decorator, ComposedComponent);

  return Decorator;
};

export default Page;
