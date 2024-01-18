import prisma from "@/prisma";

export const connectPrisma = async () => {
	try {
		await prisma.$connect();
	} catch (error: any) {
		return new Error(error.message);
	}
};
