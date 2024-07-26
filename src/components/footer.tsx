import { Typography, Button } from "@material-tailwind/react";


const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} {" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Boubacar Ballo
            </a>{" "}

            <a href="https://www.creative-tim.com" target="_blank">

            </a>

          </Typography>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
