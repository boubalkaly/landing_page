"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-28">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2 lg:place-items-center">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my Web <br /> Development Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Boubacar Ballo, a passionate web developer based in the UAE. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Typography>
          <div className="grid">
            {/* <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Subscribe to my Blog
            </Typography> */}
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              {/* <Input color="gray" label="Enter your email" size="lg" /> */}
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                View my resume
              </Button>
              <Button color="orange" className="w-full px-4 md:w-[12rem]">
                Contact me
              </Button>
            </div>
          </div>

        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/profile-picture.jpeg"
          className="h-[36rem] w-full rounded-full object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
