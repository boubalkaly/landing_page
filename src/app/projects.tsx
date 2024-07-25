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
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          My main tech stack include <span className="font-bold">Next.JS/React.JS</span>, <span className="font-bold">Tailwind CSS</span> on the frontend and
          <span className="font-bold"> Django</span> in the Backend.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 p-30">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
