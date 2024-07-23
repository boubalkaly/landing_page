import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  date: string;
}

export function SkillCard({ icon: Icon, title, children, date }: SkillCardProps) {
  return (
    <Card color="white" shadow={true} className="w-80">
      <CardBody className="grid justify-center text-center ">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant="small" color="blue-gray" className="mb-2">
          {date}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
