import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const changeLanguage = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale, scroll: false });
  };

  return (
    <div className="flex items-center rounded-full border border-line bg-surface/70 p-0.5 font-mono text-xs">
      {["pt", "en"].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => changeLanguage(l)}
          className={`cursor-pointer rounded-full px-2.5 py-1 uppercase transition-colors ${
            locale === l
              ? "bg-raised-2 text-ink"
              : "text-mute hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
