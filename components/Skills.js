import { useTranslation } from "next-i18next";
import { FaJava } from "react-icons/fa6";
import {
  SiCss,
  SiDocker,
  SiElixir,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhoenixframework,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import Section from "./Section";
import Reveal from "./Reveal";

const GROUPS = [
  {
    key: "frontend",
    items: [
      { label: "TypeScript", Icon: SiTypescript },
      { label: "JavaScript", Icon: SiJavascript },
      { label: "React", Icon: SiReact },
      { label: "Next.js", Icon: SiNextdotjs },
      { label: "HTML5", Icon: SiHtml5 },
      { label: "CSS", Icon: SiCss },
    ],
  },
  {
    key: "backend",
    items: [
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "Elixir", Icon: SiElixir },
      { label: "Phoenix", Icon: SiPhoenixframework },
      { label: "Java", Icon: FaJava },
      { label: "Spring Boot", Icon: SiSpring },
    ],
  },
  {
    key: "data",
    items: [
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "MySQL", Icon: SiMysql },
    ],
  },
  {
    key: "tools",
    items: [
      { label: "Docker", Icon: SiDocker },
      { label: "Git", Icon: SiGit },
      { label: "GitHub", Icon: SiGithub },
      { label: "Linux", Icon: SiLinux },
    ],
  },
];

const Skills = () => {
  const { t } = useTranslation("common");

  return (
    <Section id="skills" kicker={t("skills.kicker")} title={t("skills.title")}>
      <div className="grid gap-5 sm:grid-cols-2">
        {GROUPS.map(({ key, items }, i) => (
          <Reveal key={key} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-accent/40">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t(`skills.groups.${key}`)}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {items.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-line bg-raised/70 px-3 py-2 text-sm text-ink/90"
                  >
                    <Icon size={15} className="text-accent-strong" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
