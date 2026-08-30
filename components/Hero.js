import { motion } from "motion/react";
import { useTranslation } from "next-i18next";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { LuArrowDown, LuMail } from "react-icons/lu";
import { site } from "../lib/site";

const EASE = [0.21, 0.47, 0.32, 0.98];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const SOCIALS = [
  { href: site.github, label: "GitHub", Icon: FaGithub },
  { href: site.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: site.medium, label: "Medium", Icon: FaMedium },
  { href: site.substack, label: "Substack", Icon: SiSubstack },
  { href: `mailto:${site.email}`, label: "E-mail", Icon: LuMail },
];

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <section id="top" className="hero-bg relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-svh w-full max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pb-20 pt-28 lg:flex-row lg:justify-between lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            variants={item}
            className="flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-xs text-mute"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Felipe Laskos
          </motion.h1>

          <motion.div variants={item} className="mt-3 inline-flex flex-col items-center lg:items-start">
            <p className="text-gradient font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t("hero.role")}
            </p>
            <div className="relative mt-2 h-[3px] w-full overflow-hidden rounded-full bg-line">
              <motion.span
                className="absolute inset-y-0 w-1/3 rounded-full bg-linear-to-r from-accent to-glow"
                animate={{ x: ["-110%", "310%"] }}
                transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 font-display text-lg font-medium text-ink/90 sm:text-xl"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl leading-relaxed text-mute">
            {t("hero.pitch")}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              {t("hero.ctaProjects")}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line bg-surface/60 px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent/50"
            >
              {t("hero.ctaContact")}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="text-mute transition-all hover:-translate-y-0.5 hover:text-accent-strong"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-8 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
          <div className="relative size-52 rounded-full bg-linear-to-br from-accent via-accent/30 to-glow p-1 sm:size-64 lg:size-72">
            <img
              src="/img/felipe-laskos.jpg"
              alt={t("hero.photoAlt")}
              className="size-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label={t("nav.about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-mute transition-colors hover:text-ink"
      >
        <LuArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
