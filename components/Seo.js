import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { site } from "../lib/site";

const Seo = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const title = t("meta.title");
  const description = t("meta.description");

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/img/F.png" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={site.url} />
      <meta property="og:image" content={`${site.url}/img/felipe-laskos.jpg`} />
      <meta property="og:locale" content={locale === "pt" ? "pt_BR" : "en_US"} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default Seo;
