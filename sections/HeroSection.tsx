import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import LinkButton from "../components/LinkButton";

import tejaMallam from "../public/illustration.webp";
import laptop from "../public/laptop-illustration.webp";

const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // bg text parallax effect
    gsap.to(q(".bg-text"), {
      scrollTrigger: {
        trigger: q(".bg-text"),
        scrub: true,
      },
      y: 350,
    });

    // text animation after initial load
    let tl = gsap.timeline({ defaults: { stagger: 0.2, duration: 0.3 } });
    tl.fromTo(q(".text-animation"), { y: 100 }, { y: 0, delay: 1 });

    // illustration floating effect
    let imgTl = gsap.timeline({ repeat: -1 });
    imgTl
      .to(q(".image-animation"), 3, {
        y: "-=30",
        x: "+=20",
        rotation: "-=2",
        ease: "power1.easeInOut",
      })
      .to(q(".image-animation"), 2, {
        y: "+=30",
        x: "-=20",
        rotation: "-=2",
        ease: "power1.easeInOut",
      })
      .to(q(".image-animation"), 3, {
        y: "-=20",
        rotation: "+=2",
        ease: "power1.easeInOut",
      })
      .to(q(".image-animation"), 3, {
        y: "+=20",
        rotation: "+=2",
        ease: "power1.easeInOut",
      });

    // laptop floating effect
    let laptopTl = gsap.timeline({ repeat: -1 });
    laptopTl
      .to(q(".laptop"), 3, {
        y: "-=10",
        x: "+=10",
        rotation: "-=1",
        ease: "Power1.easeInOut",
      })
      .to(q(".laptop"), 2, {
        y: "+=10",
        x: "-=10",
        rotation: "-=1",
        ease: "power1.easeInOut",
      })
      .to(q(".laptop"), 3, {
        y: "-=10",
        rotation: "+=1",
        ease: "power1.easeInOut",
      })
      .to(q(".laptop"), 3, {
        y: "+=10",
        rotation: "+=1",
        ease: "power1.easeInOut",
      });
  }, [q]);

  return (
    <section
      ref={sectionRef}
      className="relative mt-16 sm:mt-8 pt-8 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-[769px] mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse"
    >
      <span
        aria-hidden="true"
        className="bg-text absolute -top-36 rotate-12 text-gray-100 dark:text-[#1f2e3a] text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center z-0"
      >
        AI ENTHUSIAST DATA ANLYIST FULL-STACK DEVELOPER
      </span>

      <div className="image-animation z-10 select-none mt-0 xs:mt-6 sm:mt-14 lg:mt-0 px-0 mx-auto lg:p-0 lg:basis-1/3">
        <div className="relative w-72 md:w-80 h-80 flex items-center mx-auto">
          <div className="absolute pointer-events-none scale-90 xs:scale-95 mx-auto">
            <Image
              src={tejaMallam}
              width={1177}
              height={1374}
              priority
              id="character-illustration"
              aria-label="Teja Mallam character illustration levitating with a Macbook"
              alt="Teja Mallam character illustration"
            />
          </div>
          <div className="laptop absolute top-14 sm:top-16 left-0 scale-[.41] xs:scale-[.45] pointer-events-none">
            <Image
              src={laptop}
              width={559}
              height={386}
              aria-hidden="true"
              alt="Laptop illustration"
            />
          </div>
        </div>
      </div>

      <div className="lg:basis-2/3 z-10 relative">
        <span className="text-marrsgreen lg:text-lg font-medium dark:text-carrigreen">
          Hi my name is
        </span>
        <div className="overflow-hidden">
          <h1 className="text-animation text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
            Teja Mallam
          </h1>
        </div>
        <div className="overflow-hidden">
          <span className="text-animation text-2xl md:text-3xl lg:text-5xl block md:my-3 text-marrsgreen dark:text-carrigreen font-medium">
            Computer Science Student & Developer
          </span>
        </div>
        <div className="mt-2 my-4 md:mb-8">
          <p className="mb-1">
            I enjoy learning by doing, I am passionate about transforming raw data into actionable insights. Proficient in Python, SQL and Java, I have experience with various data analysis tools, libraries, Fullstack Development and ML.
          </p>

          <p>
            I continuously update my AI skills, including prompt engineering, vibe coding, building ensemble models, FNN&apos;s, transformer nn&apos;s, MLP&apos;s, finetuning dl models, SLM&apos;s, n8n automations and other emerging new age AI tools, to stay ahead and Thrive in this AI era
          </p>
        </div>
        <LinkButton href={`mailto:tejamallam1233@gmail.com`}>
          Contact me!
        </LinkButton>
      </div>

    </section>
  );
};

export default HeroSection;
