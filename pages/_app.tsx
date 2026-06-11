import { useEffect, useRef } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ProvideFilter } from "context/filter";
import { ProvideSection } from "context/section";

import "../styles/globals.css";

import gsap from "gsap";
import Script from "next/script";

import { GA_MEASUREMENT_ID } from "@/lib/site";

function MyApp({ Component, pageProps }: AppProps) {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        delay: 0,
      });
    });

    const hideCursor = () => {
      gsap.to(cursorRef.current, { opacity: 0 });
    };

    const showCursor = () => {
      gsap.to(cursorRef.current, { opacity: 1 });
    };

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mousedown", hideCursor);
    document.addEventListener("mouseup", showCursor);
  }, []);
  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script id="google-analytics-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      ) : null}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        ref={cursorRef}
        className="hidden lg:block w-12 h-12 opacity-0 pointer-events-none rounded-full border-2 border-marrsgreen dark:border-carrigreen z-[9999] fixed -translate-x-1/2 -translate-y-1/2"
      />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <ProvideFilter>
          <ProvideSection>
            <Component {...pageProps} />
          </ProvideSection>
        </ProvideFilter>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
