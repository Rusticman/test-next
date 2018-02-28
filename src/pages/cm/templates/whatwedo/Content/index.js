import React from 'react';
import DraftRender from '../../../../../components/DraftRender';

function Content({ content }) {
  return (
    <DraftRender draftContext={content} />

  );
}

export default Content;
