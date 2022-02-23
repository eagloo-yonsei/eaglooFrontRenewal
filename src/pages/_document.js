import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GlobalStyle } from '../app.styled';

class _AppDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="icon" href="./eaglooicon-fat.ico" />
          <meta charSet="utf-8" />
          {this.props.styleTags}
          <link rel="stylesheet" type="text/css" href="/fonts/fonts.css" />
        </Head>
        <body data-env={process.env.EAGLOO_NODE_ENV}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _AppDocument;
