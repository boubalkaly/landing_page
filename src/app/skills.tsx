"use client";
import Image from "next/image";
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
  'css3',
  'django',
  'html5',
  'javascript',
  'nextjs',
  'nodejs',
  'postgresql',
  'python',
  'react',
  'tailwindcss',
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" variant="h3" className="mb-2 font-bold uppercase">
          My favorite technologies
        </Typography>


      </div>
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {SKILLS.map((logo, idx) => (
            <li key={idx}>
              <Image
                priority
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}/${logo}${logo === 'django' ? '-plain' : '-original'}.svg`}
                height={64}
                width={64}
                alt="Follow us on Twitter"
              />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {SKILLS.map((logo, idx) => (
            <li key={idx}>
              <Image
                priority
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}/${logo}${logo === 'django' ? '-plain' : '-original'}.svg`}
                height={64}
                width={64}
                alt="Follow us on Twitter"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
