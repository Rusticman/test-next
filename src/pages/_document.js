import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { readFileSync } from 'fs';

// no longer needed
// let version = '';
// if (!dev) {
//   version = `?v=${readFileSync(`${process.cwd()}/src/.next/BUILD_ID`)}`;
// }

let css = '';
if (!dev) {
  css = readFileSync(`${process.cwd()}/src/.next/static/style.css`, {
    encoding: 'utf8',
  });
}

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {dev && <link rel="stylesheet" href="/_next/static/style.css" />}
          {!dev && <style>{css}</style>}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
