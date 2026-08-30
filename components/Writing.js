import { useTranslation } from "next-i18next";
import { FaMedium } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { LuArrowUpRight } from "react-icons/lu";
import Section from "./Section";
import Reveal from "./Reveal";
import { site } from "../lib/site";

const CHANNELS = [
  { key: "medium", name: "Medium", Icon: FaMedium },
  { key: "substack", name: "Substack", Icon: SiSubstack },
];

const Writing = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      id="writing"
      kicker={t("writing.kicker")}
      title={t("writing.title")}
      lead={t("writing.lead")}
      tinted
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {CHANNELS.map(({ key, name, Icon }, i) => {
          return (
            <Reveal key={key} delay={i * 0.08}>
              <a
                href={site[key]}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {name}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-mute">
                  {t(`writing.${key}`)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong transition-colors group-hover:text-glow">
                  {t("writing.action")} {name}
                  <LuArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Writing;
