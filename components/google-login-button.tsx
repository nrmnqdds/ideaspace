"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const GoogleLoginButton = () => {
  return (
    <Button
      className="flex flex-row items-center justify-center gap-2"
      onClick={async () => await signIn("google")}
    >
      <FaGoogle />
      <span>Sign in with Google</span>
    </Button>
  );
};

export default GoogleLoginButton;
