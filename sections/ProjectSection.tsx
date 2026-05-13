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
    title: "F1 race pace Predictor",
    type: "Machine Learning, Deep Learning",
    desc: (
      <>
        Predicts the race pace of FormulaOne drivers using machine learning. live on {" "}
        <a
          href="https://tejamallam.me"
          target="_blank"
          rel="noreferrer"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          className="text-lg text-marrsgreen dark:text-carrigreen"
        >
          tejamallam.me
        </a>
      </>
    ),
    tags: ["Python", "Scikit-learn", "FastAPI", "CICD", "Docker", "FFNs", "GBR", "XGBoost", "Numpy", "Pandas", "Matplotlib", "DNS", "Git Actions"],
    liveUrl: "https://f1predictor.tech",
    codeUrl: "https://github.com/MallamTeja/f1_models",
    githubApi: "https://api.github.com/repos/MallamTeja/f1_models",
  },
  {
    title: "Domain-Specific Small Language Model (SLM)",
    type: "Deep Learning, RAG, Neural Networks",
    desc:
      "Fine-tuned a transformer model with X billion parameters using self-supervised learning, QLoRA, and PEFT. Added a dense RAG pipeline to increase accuracy and reduce hallucinations and latency.",
    tags: ["Python", "PyTorch", "TensorFlow", "Deeplearning", "Keras", "Numpy", "Pandas", "FFN", "MLP", "VectorDB", "RAG", "FastAPI", "UviCorn", "FFNs", "MLPs"],
    liveUrl: "https://slm.tech",
    codeUrl: "https://github.com/MallamTeja/slm",
    githubApi: "https://api.github.com/repos/MallamTeja/slm",
  },
  {
    title: "Skill Exchange",
    type: "Full-Stack",
    desc:
      "Full-stack web app to exchange skills via 1-on-1 sessions, resource finder, network connections, and WebSockets for live chatting, etc.",
    tags: [
      "MERN Stack",
      "Gemini, Serper, DeepSeek APIs Integrations",
      "Figma",
      "CI/CD Pipeline",
    ],
    liveUrl: "https://skillexchange.tech",
    codeUrl: "https://github.com/MallamTeja/1on1",
    githubApi: "https://api.github.com/repos/MallamTeja/1on1",
  },
  {
    title: "FinTrack (Personal Finance Tracker)",
    type: "Full-Stack",
    desc:
      "Full-stack web app to track personal finance, income, expenses, and savings. Integrated with MongoDB, Express, React, Node.js, WebSocket, and more.",
    tags: [
      "MERN Full-Stack",
      "Websockets", "Charts.js", "JWT Authentication", "OCR",
      "Figma",
      "CI/CD Pipeline",
    ],
    liveUrl: "https://fintrack.vercel",
    codeUrl: "https://github.com/MallamTeja/FinTrack",
    githubApi: "https://api.github.com/repos/MallamTeja/FinTrack",
  },
];

export default ProjectSection;
