import { useTranslation } from "next-i18next";
import { site } from "../lib/site";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-mute sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. {t("footer.rights")}
        </p>
        <p className="font-mono text-xs">{t("footer.built")}</p>
      </div>
    </footer>
  );
};

export default Footer;
