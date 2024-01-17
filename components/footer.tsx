import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="p-5 w-full flex flex-col items-center justify-center">
      <hr className="w-full border-border mb-5" />
      <h1 className="text-xs text-center">
        &copy; {new Date().getFullYear()} Qagura. All rights reserved.
      </h1>
    </footer>
  );
};

export default Footer;
