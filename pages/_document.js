import { Head, Html, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang={props.locale ?? "en"}>
      <Head>
        <meta name="theme-color" content="#0b0324" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
