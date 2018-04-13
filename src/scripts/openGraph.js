import React from 'react';

export default function openGraph(cardType, url, title, image, author) {
  return (
    <React.Fragment>
      <meta property="og:type" content={cardType} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      {author && <meta property="article:author" content={author} />}
    </React.Fragment>
  )
}
