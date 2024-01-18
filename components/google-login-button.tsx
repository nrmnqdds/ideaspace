"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const GoogleLoginButton = () => {
  return (
    <Button
      className="flex flex-row items-center justify-center gap-2"
      onClick={async () => {
        const res = await signIn("google");
        if (res?.ok) {
          console.log(res);
        }
      }}
    >
      <FaGoogle />
      <span>Sign in with Google</span>
    </Button>
  );
};

export default GoogleLoginButton;
