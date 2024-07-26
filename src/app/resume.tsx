"use client";

import { Typography, Button } from "@material-tailwind/react";
import Link from 'next/link';
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "BS in Computer Science at NYU",
  },
  {
    icon: EyeIcon,
    children: "Founder and CTO at Retina",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "SWE Fellow at Headstarter AI",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Investments at VentureSouq",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Slush'D MENA Organizer",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Advisor at Violet Ventures",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-16 flex flex-col items-center justify-center">
      <div className="pb-12 flex flex-col items-center">
        <Typography variant="h3" color="blue-gray" className="mb-2 uppercase">
          My Resume
        </Typography>
        <Link href="https://docs.google.com/document/d/1uwx-LbVeOOm9cN5hOeDd56flJbWgZ8m-/edit?usp=sharing&ouid=100025244013099452112&rtpof=true&sd=true">
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            See details
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RESUME_ITEMS.map((props, idx) => (
          <ResumeItem key={idx} {...props} />
        ))}
      </div>

    </section>
  );
}

export default Resume;
