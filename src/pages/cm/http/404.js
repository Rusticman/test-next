import React from 'react';
import Head from 'next/head';
import idx from 'idx';
import Page from '../layout/Page';

function NotFound({ notFound }) {
  const description = idx(notFound, nf => nf.meta.description);
  const title = idx(notFound, nf => nf.meta.title);
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name={'description'} content={description} />
      </Head>
      <div>404 - Page Not Found</div>
    </React.Fragment>
  );
}

export default Page(NotFound);

NotFound.getInitialProps = async () => {
  const notFound = await Content.findOne({ slug: 'not-found' });
  return { notFound };
};
