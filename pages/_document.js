import Document, { Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import React from 'react';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render() {
    // @ts-ignore

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'/>

        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </html>
    );
  }
}

export default MyDocument;