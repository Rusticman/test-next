import React from 'react';

export default function twitterCard(cardType, site, title, description, image) {
  return (
    <React.Fragment>
      <meta name="twitter:card"
            content={cardType} />
      <meta name="twitter:site" content={site} />
      <meta name="twitter:title"
            content={title} />
      <meta name="twitter:description"
            content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </React.Fragment>
  )
}
