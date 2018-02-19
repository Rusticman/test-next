import Document, { Head, Main, NextScript } from 'next/document';
import { readFileSync } from 'fs';

let version = '';

if (process.env.NODE_ENV === 'production') {
  version = `?v=${readFileSync(`${process.cwd()}/src/.next/BUILD_ID`)}`;
}

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href={`/_next/static/style.css${version}`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
