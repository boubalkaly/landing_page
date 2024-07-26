"use client";
import type { ButtonProps } from "@material-tailwind/react";
import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

function Hero() {
  return (
    <header className="bg-white p-12 mb-2 md:p-28">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2 place-items-center">
        <div className="row-start-2 lg:row-auto ">
          <div className="grid">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 lg:text-5xl !leading-tight text-xl text-center md:text-start"
            >
              Welcome to my Web Development Portofolio!
            </Typography>



            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">

              <Link href="https://docs.google.com/document/d/1uwx-LbVeOOm9cN5hOeDd56flJbWgZ8m-/edit?usp=sharing&ouid=100025244013099452112&rtpof=true&sd=true">
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  View my resume
                </Button>
              </Link>
              <Link href="#contact">
                <Button color="orange" className="w-full px-4 md:w-[12rem]">
                  Contact me
                </Button>
              </Link>
            </div>
          </div>

        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/profile-picture.jpeg"
          className="rounded-full md:h-[36rem] md:w-full object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
