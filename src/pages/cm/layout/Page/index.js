import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';
import idx from 'idx';
import { mediaUrl } from '../../../../helpers';
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

    const image = idx(props, p => p.url.query.meta.featured_image);
    return (
      <Document>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,600"
            rel="stylesheet" />
          <link rel="shortcut icon" type="image/png" href={FAV_ICON} />
          <link rel="shortcut icon" href={FAV_ICON} />
          <link rel="apple-touch-icon" href={FAV_ICON} />
          <meta name="theme-color" content="#8DBE36" />
          <script
            dangerouslySetInnerHTML={{ __html: tagManager('GTM-TQHW98B') }}
          />
          <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
          <meta name="twitter:site" content="@CheckdMedia" />
          <meta name="twitter:title" content={idx(props, p => p.url.query.meta.title) || ''}/>
          <meta name="twitter:description" content={idx(props, p => p.url.query.meta.description) || ''}/>
          {image && <meta name="twitter:image" content={mediaUrl(image)} />}
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
