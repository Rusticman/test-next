import React from 'react';
import Page from '../../layout/Page';

function Error({ error }) {
  console.log(error.message, JSON.stringify(error.stack));
  return (
    <div>
      <h1>An error has occurred</h1>
      <p>{JSON.stringify(error.stack)}</p>
    </div>
  );
}

export default Page(Error);
