import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { readFileSync } from 'fs';

const dev = process.env.NODE_ENV !== 'production';

function getStyles() {
  return readFileSync(`${process.cwd()}/src/.next/static/style.css`, {
    encoding: 'utf8',
  });
}

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {dev && (
            <link
              rel="stylesheet"
              href={`/_next/static/style.css?v=${Math.random().toString(32)}`}
            />
          )}
          {!dev && <style dangerouslySetInnerHTML={{ __html: getStyles() }} />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
