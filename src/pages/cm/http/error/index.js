import React from 'react';
import idx from 'idx';
import Page from '../../layout/Page';

function Error({ error }) {
  const headline = idx(error, error => error.meta.block_hero.headline);
  const secondary = idx(error, error => error.meta.block_hero.secondary);
  return (
    <div>
      <h1>{headline}</h1>
      <h2>{secondary}</h2>
    </div>
  );
}

Error.getInitialProps = async () => {
  const error = await Content.findOne({ slug: 'error' });
  return { error };
};

export default Page(Error);
