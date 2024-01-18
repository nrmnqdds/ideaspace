"use server";

import { connectPrisma } from "@/lib/prisma";
import client from "@/prisma";

export const SignIn = async () => {
  await connectPrisma();
  try {
    console.log("Sign In");
  } catch (error: any) {
    return new Error(error.message);
  } finally {
    await client.$disconnect();
  }
};
