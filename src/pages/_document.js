import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { readFileSync } from 'fs';

const css = readFileSync(`${process.cwd()}/src/.next/static/style.css`, {
  encoding: 'utf8',
});

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
