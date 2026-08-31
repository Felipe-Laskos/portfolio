import { useTranslation } from "next-i18next";
import { LuArrowUpRight } from "react-icons/lu";
import Section from "./Section";
import Reveal from "./Reveal";
import Deco from "./Deco";

const PROJECTS = [
  {
    key: "doAndBuild",
    video: "/vid/doandbuild.webm",
    poster: null,
    link: "https://doandbuild.onrender.com",
    tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JavaScript"],
  },
  {
    key: "podpatoFullstack",
    video: "/vid/PodPato (Front e Back).webm",
    poster: "/img/Podpato-Back.png",
    link: "https://podpato.onrender.com",
    tech: ["Node.js", "MongoDB", "Mongoose", "Passport"],
  },
  {
    key: "podpatoFrontend",
    video: "/vid/PodPato (Versão Front-end).webm",
    poster: "/img/Podpato-Front.png",
    link: "https://felipe-laskos.github.io/podpato/",
    tech: ["HTML", "CSS", "JavaScript", "YouTube API"],
  },
  {
    key: "ticTacToe",
    video: "/vid/jogo-da-velha.webm",
    poster: null,
    link: "https://felipe-laskos-tic-tac-toe.vercel.app",
    tech: ["React", "Hooks", "CSS"],
  },
];

const Projects = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      id="projects"
      kicker={t("projects.kicker")}
      title={t("projects.title")}
      lead={t("projects.intro")}
      deco={<Deco className="right-12 top-20 text-[4.5rem] text-deco-blue/60">{"[ ]"}</Deco>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map(({ key, video, poster, link, tech }, i) => {
          const highlights = t(`projects.items.${key}.highlights`, {
            returnObjects: true,
          });

          return (
            <Reveal key={key} delay={(i % 2) * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-all hover:-translate-y-1 hover:border-dim/50">
                <video
                  src={video}
                  poster={poster ?? undefined}
                  controls
                  preload="metadata"
                  playsInline
                  className="aspect-video w-full border-b border-line object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {t(`projects.items.${key}.name`)}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/75">
                    {t(`projects.items.${key}.description`)}
                  </p>

                  {Array.isArray(highlights) && (
                    <ul className="mt-4 space-y-1.5">
                      {highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-ink/70">
                          <span className="mt-0.5 text-dim" aria-hidden="true">
                            ▸
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-raised/70 px-2 py-1 font-mono text-xs text-mute"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-teal-ink transition-colors hover:text-ink"
                  >
                    {t("projects.visit")}
                    <LuArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
