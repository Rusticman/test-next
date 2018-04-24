import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
const dev = process.env.NODE_ENV !== 'production';

export default class extends Document {
  render() {
    const { buildManifest } = this.props;
    const { css } = buildManifest;
    console.log('buildManifest', buildManifest);
    console.log('css', css);

    return (
      <html lang="en">
        <Head>
          {css.map(file => (
            <link rel="stylesheet" href={`/_next/${file}?version=${Math.random().toString(32)}`} key={file} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}