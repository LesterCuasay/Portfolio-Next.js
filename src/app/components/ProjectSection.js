import { projects } from "../data/projects";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <section id="projects">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Proje<span className="text-second-text-color">cts</span>
        </h2>
      </div>
      {projects.map((project, i) => (
        <div
          key={i}
          className="mb-6 w-full p-4 md:p-2 border border-transparent hover:border-1 hover:bg-black/50 rounded-lg transition-all"
        >
          <div className="flex items-center">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 hover:text-second-text-color"
            >
              <FaExternalLinkAlt size={15} />
            </a>
          </div>
          <p className="mt-2 text-sm text-gray-500">{project.description}</p>
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 mr-2 mt-2 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
