"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Raza Threads",
    description: "Threads Clone Created Using MERN Stack",
    image: "/images/projects/1.png",
    tag: ["All", "MERN Stack"],
    gitUrl: "https://github.com/anasgee/thremedia",
    previewUrl: "https://www.razathreads.netlify.app",
  },
  {
    id: 2,
    title: "React Ecommerce App",
    description: "This is React E-commerce App, created using Context Api for store handeling",
    image: "/images/projects/2.png",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/anasgee/DhamaalStore",
    previewUrl: "https://dmaalstore.netlify.app/",
  },
  {
    id: 3,
    title: "Prompt Exper Full Stack Next.js",
    description: "This is full Stack Next js project to create delete and filter prompts",
    image: "/images/projects/3.png",
    tag: ["All", "MERN Stack"],
    gitUrl: "https://github.com/anasgee/PromptMaster",
    previewUrl: "https://promptmaster1.vercel.app/",
  },
  {
    id: 4,
    title: "MERN E-State / Raza Estate",
    description: "Real Estate market place to show your listings and buy/ rent your property",
    image: "/images/projects/4.png",
    tag: ["All", "MERN Stack"],
    gitUrl: "https://github.com/anasgee/mern-e-state",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Cheap Taxi Fares",
    description: "Cheap Taxi fares, an online taxi booking app",
    image: "/images/projects/5.png",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/anasgee/cheap-taxi-fares",
    previewUrl: "https://cheaptaxicomparison.aiksoltech.com/",
  },
  {
    id: 6,
    title: "TaxiCodeDirect Support Pannel",
    description: "Front End For TaxiCode Direct Support Panel",
    image: "/images/projects/6.png",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/anasgee/taxicode_supportPannel",
    previewUrl: "https://taxicodedirect.netlify.app/public",
  },
  {
    id: 7,
    title: "Social Media/ Material UI",
    description: "A practice website created using Material UI / React.js",
    image: "/images/projects/7.png",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/anasgee/social-media",
    previewUrl: "https://anasgeesocialmedia.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN Stack"
          isSelected={tag === "MERN Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front End"
          isSelected={tag === "Front End"}
        />
       
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;