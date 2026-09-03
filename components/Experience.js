import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useTranslation } from "next-i18next";
import Section from "./Section";
import Reveal from "./Reveal";
import Deco from "./Deco";

const Experience = () => {
  const { t } = useTranslation("common");
  const items = t("experience.items", { returnObjects: true });
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.45"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  return (
    <Section
      id="experience"
      kicker={t("experience.kicker")}
      title={t("experience.title")}
      tinted
      deco={<Deco className="right-14 top-28 text-[5.5rem] text-deco-violet/60">{"=>"}</Deco>}
    >
      <ol ref={trackRef} className="relative ml-2 space-y-10 pl-8 sm:ml-4">
        <span
          aria-hidden="true"
          className="absolute bottom-1.5 left-0 top-1.5 w-0.5 rounded-full bg-line"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: reduceMotion ? 1 : scaleY }}
          className="absolute bottom-1.5 left-0 top-1.5 w-0.5 origin-top rounded-full bg-teal shadow-[0_0_12px_var(--color-teal)]"
        />
        {Array.isArray(items) &&
          items.map((job, i) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-line bg-surface"
              >
                <motion.span
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px -55% 0px" }}
                  transition={{ duration: 0.35 }}
                  className="absolute -inset-0.5 rounded-full border-2 border-teal bg-teal/50 shadow-[0_0_12px_var(--color-teal)]"
                />
              </span>
              <Reveal delay={i * 0.08}>
                <p className="font-mono text-xs uppercase tracking-wider text-dim">
                  {job.period}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">
                  {job.role}{" "}
                  <span className="text-blue">· {job.company}</span>
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink/75">
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
              </Reveal>
            </li>
          ))}
      </ol>
    </Section>
  );
};

export default Experience;
