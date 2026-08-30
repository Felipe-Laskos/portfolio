import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import { MotionConfig } from "motion/react";
import nextI18NextConfig from "../next-i18next.config.js";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plexmono",
  display: "swap",
});

function App({ Component, pageProps }) {
  return (
    <div className={`${manrope.variable} ${sora.variable} ${plexMono.variable} font-sans`}>
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
    </div>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
