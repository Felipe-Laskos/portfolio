import { useTranslation } from "next-i18next";
import { LuGraduationCap, LuLanguages, LuMapPin, LuZap } from "react-icons/lu";
import Section from "./Section";
import Reveal from "./Reveal";

const FACTS = [
  { key: "location", Icon: LuMapPin },
  { key: "education", Icon: LuGraduationCap },
  { key: "english", Icon: LuLanguages },
  { key: "focus", Icon: LuZap },
];

const About = () => {
  const { t } = useTranslation("common");

  return (
    <Section id="about" kicker={t("about.kicker")} title={t("about.title")}>
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 leading-relaxed text-mute">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
        </Reveal>

        <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {FACTS.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={0.1 + i * 0.06}>
              <div className="flex items-center gap-3 rounded-xl border border-line bg-surface/60 px-4 py-3 transition-colors hover:border-accent/40">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={17} />
                </span>
                <span className="text-sm text-ink/90">{t(`about.facts.${key}`)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
