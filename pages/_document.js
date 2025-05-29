import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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
      <Html lang="en">
        <Head>
          {/* Favicon links - ensure favicon.ico is in /public */}
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* You can add other meta tags, font links if not using next/font in _app.js, etc. */}
          <meta name="description" content="hueneu: Where stories find their aesthetic. Designs that whisper loud stories." />
          <meta name="keywords" content="graphic design, branding, packaging, social media, stationery, creative projects, hueneu, design studio" />
          <meta property="og:title" content="hueneu Graphic Design Studio" />
          <meta property="og:description" content="Designs that whisper loud stories. Story-first, intentional, balanced design." />
          <meta property="og:type" content="website" />
          {/* Add og:image and og:url once deployed or if you have a placeholder */}
          {/* <meta property="og:image" content="/images/hueneu-og-image.jpg" /> */}
          {/* <meta property="og:url" content="https://www.hueneu.com" /> */}
          <meta name="twitter:card" content="summary_large_image" />
          {/* <meta name="twitter:site" content="@hueneu_" /> */}
          <meta name="twitter:title" content="hueneu Graphic Design Studio" />
          <meta name="twitter:description" content="Where stories find their aesthetic." />
          {/* <meta name="twitter:image" content="/images/hueneu-twitter-card.jpg" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
