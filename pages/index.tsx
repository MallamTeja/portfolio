import type { NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

export const meta = {
  description:
    "Teja Mallam is a Computer Science undergrad at MLR Institute of Technology. He is passionate about full-stack development and data analysis, building tech with intent and learning every single day.",
  author: "Teja Mallam",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/tejamallam-og.png`,
  siteName: "Teja Mallam",
  imageAlt: "Teja Mallam portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Teja Mallam - Aspiring Full Stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>TejaMallam.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <SkillsSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};


export default Home;
