import { Head, Html, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang={props.locale ?? "en"}>
      <Head>
        <meta name="theme-color" content="#070b18" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
