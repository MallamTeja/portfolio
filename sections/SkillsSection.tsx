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
    category: "Programming Languages & Frameworks",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Redux" },
      { name: "Node.js" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "SQL" },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
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
    category: "Data Science & Visualization",
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
        <div className="text-center mb-8" ref={elementRef}>
          Here are the technologies and tools I work with
          <br className="hidden sm:block" aria-hidden="true" />
          rendered as polygon badges like the 3D portfolio icons.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="bg-cardlight dark:bg-carddark rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-marrsdark dark:text-carrigreen mb-5 text-center">
                {category.category}
              </h3>
              <ul className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="skill-badge">
                    {skill.icon?.svg ? (
                      <span 
                        className="skill-badge__img" 
                        dangerouslySetInnerHTML={{ __html: skill.icon.svg }} 
                      />
                    ) : skill.icon?.slug ? (
                      <span className="skill-badge__img">
                        <Image
                          src={`https://cdn.simpleicons.org/${skill.icon.slug}`}
                          alt={skill.name}
                          width={36}
                          height={36}
                          className="skill-badge__image"
                          unoptimized={true}
                        />
                      </span>
                    ) : (
                      <span className="skill-badge__placeholder">{skill.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
