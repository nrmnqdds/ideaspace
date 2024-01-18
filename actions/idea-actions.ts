"use server";

import { getServerAuthSession } from "@/lib/auth";
import { connectPrisma } from "@/lib/prisma";
import client from "@/prisma";

export const CreateIdea = async (values: {
  title: string;
  description: string;
  tags: string[];
}) => {
  const session = await getServerAuthSession();
  if (!session) throw new Error("You must be signed in to do that.");

  await connectPrisma();

  try {
    const userExists = await client.user.findFirst({
      where: {
        email: session?.user?.email as string,
      },
    });

    if (!userExists) throw new Error("User does not exist");

    const idea = await client.idea.create({
      data: {
        title: values.title,
        description: values.description,
        tags: values.tags,
        authorId: userExists.id,
      },
    });

    return idea;
  } catch (error: any) {
    return new Error(error.message);
  } finally {
    await client.$disconnect();
  }
};

export const GetIdeas = async () => {
  await connectPrisma();

  try {
    const ideas = await client.idea.findMany({
      include: {
        author: true,
      },
    });

    return ideas;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    await client.$disconnect();
  }
};
