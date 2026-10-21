import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useTranslation } from "next-i18next";
import Section from "./Section";
import Deco from "./Deco";

const EASE = [0.21, 0.47, 0.32, 0.98];

const BEAM = 0.45;
const RISE = 0.15;
const STEP_BASE = 64;
const STEP_RISE = 72;

const beam = {
  hidden: { scaleX: 0 },
  show: (start) => ({ scaleX: 1, transition: { delay: start, duration: BEAM, ease: "linear" } }),
};

const riser = {
  hidden: { scaleY: 0 },
  show: (start) => ({ scaleY: 1, transition: { delay: start - RISE, duration: RISE, ease: "linear" } }),
};

const light = {
  hidden: { opacity: 0, scale: 0.4 },
  show: (start) => ({ opacity: 1, scale: 1, transition: { delay: start, duration: 0.25, ease: "easeOut" } }),
};

const ping = {
  hidden: { opacity: 0, scale: 1 },
  show: (start) => ({
    opacity: [0, 0.8, 0],
    scale: [1, 1, 2.6],
    transition: { delay: start, duration: 0.9, times: [0, 0.1, 1], ease: "easeOut" },
  }),
};

const card = {
  hidden: { opacity: 0, y: 12 },
  show: (start) => ({ opacity: 1, y: 0, transition: { delay: start, duration: 0.5, ease: EASE } }),
};

const useStairs = () => {
  const [stairs, setStairs] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 64rem)");
    const update = () => setStairs(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return stairs;
};

const Experience = () => {
  const { t } = useTranslation("common");
  const items = t("experience.items", { returnObjects: true });
  const jobs = Array.isArray(items) ? [...items].reverse() : [];
  const stairs = useStairs();
  const baseRef = useRef(null);
  const baseInView = useInView(baseRef, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <Section
      id="experience"
      kicker={t("experience.kicker")}
      title={t("experience.title")}
      tinted
      deco={<Deco className="right-14 top-28 text-[5.5rem] text-deco-violet/60">{"=>"}</Deco>}
    >
      <motion.ol
        key={stairs ? "stairs" : "stack"}
        initial="hidden"
        animate={stairs && baseInView ? "show" : undefined}
        className="grid gap-10 lg:auto-cols-fr lg:grid-flow-col lg:items-end lg:gap-0 lg:border-b-2 lg:border-line"
      >
        {jobs.map((job, i) => {
          const start = stairs ? i * (BEAM + RISE) : 0;
          const year = job.period.match(/\d{4}/)?.[0];
          const trigger = stairs
            ? {}
            : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-60px" } };

          return (
            <motion.li key={i} {...trigger} className="flex min-w-0 flex-col">
              <motion.div variants={card} custom={start} className="pb-5 pl-5 pr-2 lg:pr-7">
                <p className="font-mono text-xs uppercase tracking-wider text-dim">
                  {job.period}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">
                  {job.role}{" "}
                  <span className="text-blue">· {job.company}</span>
                </h3>
                <p className="mt-2 leading-relaxed text-ink/75 lg:text-[0.9375rem]">
                  {job.description}
                </p>
                {job.stack?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-xs text-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              <div
                aria-hidden="true"
                className="relative h-14 border-t-2 border-line lg:h-(--step-h)"
                style={{
                  "--step-h": `${STEP_BASE + i * STEP_RISE}px`,
                  backgroundColor: `color-mix(in srgb, var(--color-raised) ${(i / Math.max(jobs.length - 1, 1)) * 100}%, var(--color-surface))`,
                }}
              >
                {i > 0 && (
                  <>
                    <span
                      className="absolute -top-0.5 left-0 hidden w-0.5 bg-line lg:block"
                      style={{ height: STEP_RISE + 2 }}
                    />
                    <motion.span
                      variants={riser}
                      custom={start}
                      className="absolute -top-0.5 left-0 hidden w-0.5 origin-bottom bg-teal shadow-[0_0_12px_var(--color-teal)] lg:block"
                      style={{ height: STEP_RISE + 2 }}
                    />
                  </>
                )}
                <motion.span
                  variants={beam}
                  custom={start}
                  className="absolute inset-x-0 -top-0.5 h-0.5 origin-left bg-teal shadow-[0_0_12px_var(--color-teal)]"
                />
                <span className="absolute -left-1.5 -top-[7px] size-3 rounded-full border-2 border-line bg-surface">
                  <motion.span
                    variants={light}
                    custom={start}
                    className="absolute -inset-0.5 rounded-full border-2 border-teal bg-teal/50 shadow-[0_0_12px_var(--color-teal)]"
                  />
                </span>
                {i === jobs.length - 1 && (
                  <span className="absolute -right-1.5 -top-[7px] size-3">
                    <motion.span
                      variants={ping}
                      custom={start + BEAM}
                      className="absolute inset-0 rounded-full border-2 border-teal"
                    />
                    <motion.span
                      variants={light}
                      custom={start + BEAM}
                      className="absolute inset-0 rounded-full bg-teal shadow-[0_0_14px_var(--color-teal)]"
                    />
                  </span>
                )}
                <span className="absolute bottom-1.5 right-4 font-mono text-[1.75rem] font-medium leading-none text-deco-violet/60 lg:text-[2.5rem]">
                  {year}
                </span>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
      <div ref={baseRef} aria-hidden="true" />
    </Section>
  );
};

export default Experience;
