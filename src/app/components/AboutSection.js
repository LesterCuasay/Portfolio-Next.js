"use client";
import React, { useState } from "react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section>
      <div>
        <h2>
          About <span>Me</span>
        </h2>
        <h3>Junior Full Stack Developer</h3>
        <p>
          I'm a recent graduate of Code Institute with a strong foundation in
          coding and a unique background as a professional chef. My experience
          in the culinary world has equipped me with invaluable
          skills—precision, creativity, and the ability to thrive in fast-paced,
          high-pressure environments. As a chef, I&apos;ve learned the art of
          adapting quickly, solving complex problems, and collaborating
          seamlessly with a team to achieve the best results. Now, I&apos;m
          eager to transfer these skills into the tech field, where I can
          channel my drive for excellence into building, optimizing, and
          improving digital solutions.
          {!showMore && <span className="mt-2 block">...</span>}
          <span className={`${showMore ? "block mt-2" : "hidden"}`}>
            At Code Institute, I honed my skills in web development, learning
            core technologies like HTML, CSS, JavaScript, and Python, and gained
            hands-on experience with project-based learning. My journey from the
            kitchen to the code editor has taught me that while the tools may
            differ, the principles of dedication, resilience, and creativity
            remain the same. I am actively seeking an opportunity in tech where
            I can leverage my unique perspective, continue to learn, and
            contribute meaningfully to innovative projects.
          </span>
        </p>
        <button className="mt-4" onClick={handleReadMore}>
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
