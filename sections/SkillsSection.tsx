import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";

import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import { useSection } from "context/section";

type Skill = {
  name: string;
  icon?: {
    slug?: string;
    svg?: string;
    color?: string
  }
};

const skillsData: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: { slug: "html5" } },
      { name: "CSS3", icon: { slug: "css3" } },
      { name: "Tailwind CSS", icon: { slug: "tailwindcss" } },
      { name: "JavaScript", icon: { slug: "javascript" } },
      { name: "TypeScript", icon: { slug: "typescript" } },
      { name: "React", icon: { slug: "react" } },

    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: { slug: "python" } },
      { name: "Java" },
      { name: "Node.js", icon: { slug: "nodedotjs" } },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "SQL" },

    ],
  },
  {
    category: "Development Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Docker" },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    skills: [
      { name: "NumPy" },
      { name: "pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Power BI" },
      { name: "Tableau" },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for skills section
  const skillsSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    skillsSection && onSectionChange!("skills");
  }, [skillsSection]);

  // map skill names to provided image URLs (raw GitHub for direct file access)
  const iconUrlMap: Record<string, string> = {
    "HTML5": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/html.png",
    "CSS3": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/css.png",
    "JavaScript": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/javascript.png",
    "TypeScript": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/typescript.png",
    "React": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/reactjs.png",
    "Redux": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/redux.png",
    "Tailwind CSS": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/tailwind.png",
    "Node.js": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/nodejs.png",
    "MongoDB": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/mongodb.png",
    "Three.js": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/threejs.svg",
    "Git": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/git.png",
    "Figma": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/figma.png",
    "Docker": "https://raw.githubusercontent.com/sanidhyy/3d-portfolio/refs/heads/main/src/assets/tech/docker.png",
  };

  return (
    <div className="bg-bglight dark:bg-bgdark">
      <section ref={sectionRef} id="skills" className="section md:px-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${
              theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
            }`}
            strokeWidth={2}
            order={1}
            show={isOnScreen}
          >
            <h2 className="section-heading">Skills</h2>
          </RoughNotation>
        </div>
        <div className="text-center mb-8" ref={elementRef}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="bg-transparent rounded-lg p-2"
            >
              <ul className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill) => {
                  const src = iconUrlMap[skill.name] || (skill.icon?.slug ? `https://cdn.simpleicons.org/${skill.icon.slug}` : undefined);
                  return (
                    <li key={skill.name} className="skill-badge">
                      {src ? (
                        <span className="skill-badge__img">
                          <Image
                            src={src}
                            alt={skill.name}
                            width={48}
                            height={48}
                            className="rounded-full bg-white p-1"
                            unoptimized={true}
                          />
                        </span>
                      ) : (
                        <span className="skill-badge__placeholder">{skill.name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
