import { useTranslation } from "next-i18next";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import Reveal from "./Reveal";
import Deco from "./Deco";
import { site } from "../lib/site";

const SOCIALS = [
  { href: site.github, label: "GitHub", Icon: FaGithub },
  { href: site.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: site.medium, label: "Medium", Icon: FaMedium },
  { href: site.substack, label: "Substack", Icon: SiSubstack },
];

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <section id="contact" className="relative scroll-mt-20">
      <Deco className="bottom-24 left-16 text-[4rem] text-deco-violet/60">;</Deco>
      <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.17em] text-teal-ink">
            {t("contact.kicker")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink/75">
            {t("contact.lead")}
          </p>

          <div className="mt-9">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-teal to-blue px-7 py-3.5 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <LuMail size={17} />
              {t("contact.cta")}
            </a>
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-wider text-mute">
            {t("contact.or")}
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-mute transition-all hover:-translate-y-0.5 hover:text-teal-ink"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
