const Deco = ({ children, className = "" }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute hidden select-none font-mono font-medium leading-none lg:block ${className}`}
  >
    {children}
  </span>
);

export default Deco;
