import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  href: string
}

export function ProjectCard({ img, title, desc, href }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 md:h-40 md:w-64">
        <Image
          src={img}
          alt={title}
          width={256}
          height={256}

          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0 md:h40 md:w-64">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <a href={href} className="w-full">
          <Button color="gray" size="sm">
            see details
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
