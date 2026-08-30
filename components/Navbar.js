import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import LanguageSwitcher from "./LanguageSwitcher";
import { site } from "../lib/site";

const LINKS = ["about", "experience", "projects", "writing", "contact"];

const Navbar = () => {
  const { t } = useTranslation("common");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink">
          felipe<span className="text-accent">.laskos</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm text-mute transition-colors hover:text-ink"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-mute transition-colors hover:text-ink"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-mute transition-colors hover:text-ink"
          >
            <FaLinkedin size={18} />
          </a>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
