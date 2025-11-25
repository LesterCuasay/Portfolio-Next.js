import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Experie<span className="text-second-text-color">nce</span>
        </h2>
      </div>
      {experience.map((item, i) => (
        <div
          key={i}
          className="mb-6 w-full p-4 md:p-2 border border-transparent hover:border-1 hover:bg-black/50 rounded-lg transition-all"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[40%]">
              <p className="text-sm italic text-gray-500">{item.period}</p>
            </div>
            <div className="md:w-[60%] md:ml-1">
              <h3 className="text-xl font-semibold">
                {item.role} · {item.company}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              {item.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 mr-2 mt-2 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
