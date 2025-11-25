import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience">
      {experience.map((item, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold">
            {item.role} @ {item.company}
          </h3>
          <span className="text-sm italic text-gray-500">{item.period}</span>
          <p className="mt-2">{item.description}</p>
          <div className="mt-2">
            {(item.technologies ?? []).map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 mr-2 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
