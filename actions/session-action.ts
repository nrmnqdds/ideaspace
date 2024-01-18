"use server";

import { getServerAuthSession } from "@/lib/auth";

export async function GetSession() {
  const data = await getServerAuthSession();

  return data;
}
