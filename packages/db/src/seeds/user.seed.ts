import { PrismaRepository } from "src/prisma.repo";
import type { PrismaClient } from "@prisma/client";

export const UserSeed = (prisma: PrismaClient) => {
	const run = async () => {
		const user1 = await prisma.user.create({
			data: {
				email: "example@hotmail.com",
			},
		});

		console.log("created:", user1);
	};

	return {
		run,
	};
};
