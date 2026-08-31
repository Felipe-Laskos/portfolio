import Reveal from "./Reveal";

const Section = ({ id, kicker, title, lead, tinted = false, deco, children }) => (
  <section
    id={id}
    className={`relative scroll-mt-20 ${tinted ? "border-y border-line bg-surface/40" : ""}`}
  >
    {deco}
    <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.17em] text-teal-ink">
          {kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {lead ? <p className="mt-4 max-w-2xl text-ink/70">{lead}</p> : null}
      </Reveal>
      <div className="mt-12">{children}</div>
    </div>
  </section>
);

export default Section;
