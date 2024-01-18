import { connectPrisma } from "@/lib/prisma";
import client from "@/prisma";

const clearDatabase = async () => {
	await connectPrisma();
	try {
		await client.idea.deleteMany();
		await client.$disconnect();
	} catch (error: any) {
		return new Error(error.message);
	}
};
