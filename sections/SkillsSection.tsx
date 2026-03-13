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
      { name: "Postman" },
      { name: "GitHub Actions" },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    skills: [
      { name: "NumPy" },
      { name: "pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Scikitlearn" },
      { name: "TensorFlow" },
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "FastAPI" },
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

  // map display names to official Simple Icons slugs for brand-correct SVGs
  const iconSlugMap: Record<string, string> = {
    "HTML5": "html5",
    "CSS3": "css3",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "React": "react",
    "Redux": "redux",
    "Tailwind CSS": "tailwindcss",
    "Node.js": "nodedotjs",
    "MongoDB": "mongodb",
    "Three.js": "threedotjs",
    "Git": "git",
    "GitHub": "github",
    "Figma": "figma",
    "Docker": "docker",
    "Python": "python",
    "Java": "java",
    "MySQL": "mysql",
    // Data/ML
    "NumPy": "numpy",
    "pandas": "pandas",
    "Matplotlib": "matplotlib",
    "Seaborn": "seaborn",
    "Scikitlearn": "Scikitlearn",
    "TensorFlow": "tensorflow",
    "Power BI": "powerbi",
    "Tableau": "tableau",
    "Postman": "postman",
    "FastAPI": "fastapi",
    "GitHub Actions": "githubactions",
  };

  // exact icon URLs from your markdown snippet
  const iconUrlOverrides: Record<string, string> = {
    "Python": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "Java": "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    "JavaScript": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    "HTML5": "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    "CSS3": "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    "Tailwind CSS": "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    "Git": "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    "TypeScript": "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    "Docker": "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    "GitHub": "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    "MongoDB": "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    "MySQL": "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    "SQL": "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    "NumPy": "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    "pandas": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
    "Matplotlib": "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    "Seaborn": "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    "Scikitlearn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    "TensorFlow": "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg",
    "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    "Tableau": "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    "Figma": "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    "Postman": "https://cdn.worldvectorlogo.com/logos/postman.svg",
    "FastAPI": "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
    "GitHub Actions": "https://cdn.simpleicons.org/githubactions",
  };

  return (
    <div className="bg-bglight dark:bg-bgdark">
      <section ref={sectionRef} id="skills" className="section md:px-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
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
              className="bg-cardlight dark:bg-carddark rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-center text-marrsdark dark:text-carrigreen mb-4">
                {category.category}
              </h3>
              <ul className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill) => {
                  const override = iconUrlOverrides[skill.name];
                  const slug = iconSlugMap[skill.name] || skill.icon?.slug;
                  const src = override || (slug ? `https://cdn.simpleicons.org/${slug}` : undefined);
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
