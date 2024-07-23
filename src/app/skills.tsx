"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  ChartPieIcon,
  CodeBracketIcon,
  PresentationChartLineIcon
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: CodeBracketIcon,
    title: "Headstarter AI",
    children:
      "Currently building 5 AI apps with 2-3 other fellows",
    date: "Jul 2024 - Present",
  },
  {
    icon: ChartPieIcon,
    title: "VentureSouq",
    children:
      "Building beautiful interfaces for investment optimization",
    date: "Jun 2024 - Aug 2024",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Liwa Capital",
    children:
      "Built automated software for lead generation",
    date: "Jun 2023 - Jan 2024",
  },
  {
    icon: HashtagIcon,
    title: " Slush'D",
    children:
      "Bringing the most founder-focused tech event on earth to the UAE",
    date: "Feb 2023 - Present",
  },
  {
    icon: EyeIcon,
    title: "Violet Ventures",
    children:
      "Inspiring 1250+ students in MENA to become entrepreneurs",
    date: "Feb 2023 - May 2024",
  },
  {
    icon: DocumentTextIcon,
    title: "Extra",
    children:
      "We will see about this one",
    date: "Jun 2024 - Aug 2024",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" variant="h3" className="mb-2 font-bold uppercase">
          My experiences
        </Typography>


      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 md:place-items-center lg:grid-cols-3 lg:place-items-center">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
