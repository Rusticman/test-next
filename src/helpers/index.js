import React from 'react';

export function mediaUrl(slug, size = 'lg') {
  return `https://cdn.checkd.media/images/${slug}-${size}.jpg`;
}

/**
 * @param editorState
 * @param length
 * @return excerpt
 ***/
export function createExcerpt(editorState, length) {
  let parsed = null;
  try {
    parsed = JSON.parse(editorState);
  } catch (e) {
    return '';
  }
  let text = '';

  parsed.blocks.forEach((block) => {
    if (block.type === 'unstyled' && block.text.length) {
      text += block.text;
    }
  });

  if (text.length > length) {
    text = text.substring(0, length);
  }

  return text;
}
/**
 * @param page number
 * @param href
 * @param total amount of posts
 * @param limit of posts per render
 * @return links
 ***/
export function createLinks(page, href, total, limit) {
  if (page === 1) {
    return <link rel="next" href={`${href}?page=2`} />;
  }
  else if (page > 1 && (page * limit) < total) {
    return (
      <React.Fragment>
        <link rel="prev" href={`${href}/page=${page - 1}`} />
        <link rel="next" href={`${href}/page=${page + 1}`} />
      </React.Fragment>
    );
  }
  else {
    return (
      <link rel="prev" href={`${href}/page=${page - 1}`} />
    );
  }
}


export function isServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
}
