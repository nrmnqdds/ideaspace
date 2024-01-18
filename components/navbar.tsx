import { ThemeSwitcher } from "@/components/theme-switcher";
import { getServerAuthSession } from "@/lib/auth";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import GoogleLoginButton from "./google-login-button";
import UserProfile from "./user-profile";

const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <nav className="fixed z-50 top-5 right-5 flex flex-row gap-5 items-center justify-center">
      <Link href="/">
        <h1 className="text-2xl font-bold text-foreground hover:scale-105 active:scale-100 duration-200">
          IdeaSpace.
        </h1>
      </Link>

      {session ? <UserProfile session={session} /> : <GoogleLoginButton />}

      <Link
        href="https://github.com/nrmnqdds/ideaspace"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-2xl text-foreground hover:scale-110 active:scale-100 duration-200" />
      </Link>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
