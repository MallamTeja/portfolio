import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

// removed image imports

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        "Talk is cheap. Show me the code." I got you. <br />
        Here are some of my projects you shouldn't miss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored on{" "}
        <a
          href="https://github.com/MallamTeja"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my GitHub profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Domain-Specific Small Language Model (SLM)",
    type: "Deep Learning, RAG, Neural Networks",
    desc:
      "Fine-tuned a transformer model with X billion parameters using self-supervised learning, QLoRA, and PEFT. Added a dense RAG pipeline to increase accuracy and reduce hallucinations and latency.",
    tags: ["PyTorch", "TensorFlow", "Python"],
    liveUrl: "https://SLM.pages.dev/",
    codeUrl: "https://github.com/MallamTeja",
    githubApi: "https://api.github.com/users/MallamTeja",
  },
  {
    title: "Skill Exchange Full-Stack Project",
    type: "Full-Stack",
    desc:
      "Full-stack web app to exchange skills via 1-on-1 sessions, resource finder, network connections, and WebSockets for live chatting, etc.",
    tags: [
      "MERN Full-Stack",
      "Gemini, Serper, DeepSeek APIs Integration",
      "Figma",
      "CI/CD Pipeline",
    ],
    liveUrl: "https://terminal.satnaing.dev/",
    codeUrl: "https://github.com/MallamTeja/",
    githubApi: "https://api.github.com/users/MallamTeja",
  },
  {
    title: "FinTrack Personal Finance Tracker",
    type: "Full-Stack",
    desc:
      "Full-stack web app to track personal finance, income, expenses, and savings. Integrated with MongoDB, Express, React, Node.js, WebSocket, and more.",
    tags: [
      "MERN Full-Stack",
      "Gemini, Serper, DeepSeek APIs Integration",
      "Figma",
      "CI/CD Pipeline",
    ],
    liveUrl: "https://terminal.satnaing.dev/",
    codeUrl: "https://github.com/MallamTeja/",
    githubApi: "https://api.github.com/users/MallamTeja",
  },
];

export default ProjectSection;
