"use client";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";
import { FaPlay, FaPython, FaSwift, FaHtml5, FaGithub } from "react-icons/fa";

interface Project {
  img: string;
  icon: string;
  title: string;
  des: string;
  Icon: IconType;
  url: string;
  repo: string;
}

const projectData: Project[] = [
  {
    img: "/StarGuard.png",
    icon: "/StarGuardBranded.png",
    title: "StarGuard",
    des: "StarGuard is the first game I was allowed to program without an engine such as Unity or Unreal. Only through the power of PyGame, this arcade tower defense game was created and is now running on an arcade machine exhibited at the university.",
    Icon: FaPython,
    url: "https://fiblog.maxoverlack.dev/play/",
    repo: "https://github.com/SetsunaiCodes/Star-Guard",
  },
  {
    img: "/Galaxia.png",
    icon: "/GalxiaBranded.png",
    title: "Galaxia",
    des: "Galaxia is an App project that emerged as part of a module. The idea: to have the offerings of the most famous streaming services in one place and be able to manage them for oneself. What's particularly unique here is the design system that I devised. Because with each launch of the app, a different background is generated based on the day's highlights and determines the color pattern of the project.",
    Icon: FaSwift,
    url: "https://galaxia.maxoverlack.dev/",
    repo: "https://github.com/IAmMajo/Galaxia",
  },
  {
    img: "/Abstaende.png",
    icon: "/AbstandBranded.png",
    title: "Distance in R^3",
    des: "For a math project, we were tasked with developing a tool to calculate the distance between lines, planes, or points in a three-dimensional coordinate system. We decided to create a website for this purpose and furthermore visualize the results using WebGL.",
    Icon: FaHtml5,
    url: "https://abstaendeimr3.maxoverlack.dev/",
    repo: "https://github.com/IAmMajo/Abstaende-Im-R3",
  },
];

const SelectedProject: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative projects flex flex-center gap">
      <img
        className="mobile-projects-image"
        src={project.img}
        alt={project.title}
      />

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
      src={project.icon}
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
    <div className="mobile-project-list flex flex-center margin-b-20 gap">
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
    <div className="static-section bg-dark flex mobile-flex-column flex-center">
      <div className="dynamic-container mobile-margin-20">
        <ProjectsList
          projects={projectData}
          onSelect={(project) => setSelectedProject(project)}
        />
        {selectedProject ? (
          <SelectedProject project={selectedProject} />
        ) : (
          <div>Select a project</div>
        )}
      </div>
    </div>
  );
};

export default Projects;
