"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/retina.jpg",
    title: "Retina",
    desc: "App an to make college readings easier for dyslexics",
    href: "https://github.com/boubalkaly/retina"
  },
  {
    img: "/image/stock.jpg",
    title: "Halal Stock Predictor",
    desc: "Determining future closing prices for Shariah-compliant stocks",
    href: "https://github.com/boubalkaly/halal_stock_predictor"
  },
  {
    img: "/image/olympics.jpg",
    title: "Olympics Winner Predictor",
    desc: "Know in advance who will win the 2024 olympics",
    href: "https://olympics-predictor.streamlit.app/"
  },
  {
    img: "/image/library.jpg",
    title: "Library Management System",
    desc: "Create, store and search your favorite books in sub-linear time complexity",
    href: "https://github.com/boubalkaly/library_system"
  },
];

export function Projects() {
  return (
    <section className="py-28 px-10" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
          Things I built
        </Typography>

      </div>
      <div className="grid grid-cols-1 gap-y-20 md:flex md:justify-center md:gap-10 md:flex-wrap">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
