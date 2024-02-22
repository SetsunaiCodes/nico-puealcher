"use client";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";
import { FaPlay, FaPython, FaSwift, FaHtml5, FaGithub } from "react-icons/fa";

interface Project {
  img: string;
  title: string;
  des: string;
  Icon: IconType;
  url: string;
  repo: string;
}

const projectData: Project[] = [
  {
    img: "/StarGuard.png",
    title: "StarGuard",
    des: "Das ist die Beschreibung zu StarGuard",
    Icon: FaPython,
    url: "https://fiblog.maxoverlack.dev/play/",
    repo: "https://github.com/SetsunaiCodes/Star-Guard",
  },
  {
    img: "/Galaxia.png",
    title: "Galaxia",
    des: "Das ist die Beschreibung zu Galaxia",
    Icon: FaSwift,
    url: "https://galaxia.maxoverlack.dev/",
    repo: "https://github.com/IAmMajo/Galaxia",
  },
  {
    img: "/Abstaende.png",
    title: "Differences in R^3",
    des: "Das ist die Beschreibung zu Abstände",
    Icon: FaHtml5,
    url: "https://abstaendeimr3.maxoverlack.dev/",
    repo: "https://github.com/IAmMajo/Abstaende-Im-R3",
  },
];

const SelectedProject: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative projects flex flex-center gap">
      <img src={project.img} alt={project.title} />

      <div className="projects-container">
        <div className="flex flex-a-center-j-start">
          <span>
            <project.Icon />
          </span>

          <h1>{project.title}</h1>
        </div>

        <p>{project.des}</p>

        <div className="flex flex-column gap">
          <button onClick={() => window.open(project.url)}>
            <FaPlay />
          </button>

          <button onClick={() => window.open(project.repo)}>
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{
  project: Project;
  onSelect: (project: Project) => void;
}> = ({ project, onSelect }) => {
  return (
    <img
      className="project-card"
      src={project.img}
      alt={project.title}
      onClick={() => onSelect(project)}
    />
  );
};

const ProjectsList: React.FC<{
  projects: Project[];
  onSelect: (project: Project) => void;
}> = ({ projects, onSelect }) => {
  return (
    <div className="flex flex-center margin-t-20 gap">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} onSelect={onSelect} />
      ))}
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Select the first project from projectData initially
    if (!selectedProject && projectData.length > 0) {
      setSelectedProject(projectData[0]);
    }
  }, [selectedProject]);

  return (
    <div className="static-section bg-dark flex flex-center">
      <div className="dynamic-container">
        {selectedProject ? (
          <SelectedProject project={selectedProject} />
        ) : (
          <div>Select a project</div>
        )}
        <ProjectsList
          projects={projectData}
          onSelect={(project) => setSelectedProject(project)}
        />
      </div>
    </div>
  );
};

export default Projects;
