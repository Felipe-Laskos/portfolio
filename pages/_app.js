import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Red_Hat_Display, Red_Hat_Mono, Red_Hat_Text } from "next/font/google";
import { MotionConfig } from "motion/react";
import nextI18NextConfig from "../next-i18next.config.js";

const rhText = Red_Hat_Text({ subsets: ["latin"], variable: "--font-rh-text", display: "swap" });
const rhDisplay = Red_Hat_Display({ subsets: ["latin"], variable: "--font-rh-display", display: "swap" });
const rhMono = Red_Hat_Mono({ subsets: ["latin"], variable: "--font-rh-mono", display: "swap" });

function App({ Component, pageProps }) {
  return (
    <div className={`${rhText.variable} ${rhDisplay.variable} ${rhMono.variable} font-sans`}>
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
    </div>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
