import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';
import idx from 'idx';
import Router from 'next/router';
import { mediaUrl } from '../../../../helpers';
import Document from '../../../../components/Document';
import tagManager from '../../../../scripts/tagManager';
import store from '../../../../redux';
import twitterMeta from '../../../../scripts/twitter';
import openGraphMeta from '../../../../scripts/openGraph';


import styles from './styles.less';

const FAV_ICON = 'https://cdn.checkd.media/favicons/cm.png';

const Page = ComposedComponent => {
  class Decorator extends React.Component {

    componentDidMount() {
      Router.beforePopState(() => {
        return false;
      });
    }

    render() {
      const props = this.props;

      const initialState = {
        query: props.url.query,
      };

      const twitterType = image ? "summary_large_image" : "summary";
      const openType = props.url.query.type === 'page' ? 'website' : 'article';
      const image = idx(props, p => p.url.query.meta.featured_image);
      const title = idx(props, p => p.url.query.meta.title) || '';
      const description = idx(props, p => p.url.query.meta.description) || '';
      const createdBy = idx(props, p => p.url.query.created_by) ? props.url.query.created_by : 'Checkd Media';

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
            {twitterMeta(twitterType, "@CheckdMedia", title, description, image && mediaUrl(image))}
            {openGraphMeta(openType, 'wwww.checkd.media.com', title, image && mediaUrl(image), createdBy)}
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
  }

  hoistNonReactStatics(Decorator, ComposedComponent);

  return Decorator;
};

export default Page;
