import type { PrismaClient } from "@prisma/client";

export const UserSeed = (prisma: PrismaClient) => {
	const run = async () => {
		const user1 = await prisma.user.create({
			data: {
				email: "example@hotmail.com",
				name: "example",
				password: "password123",
			},
		});

		console.log("created:", user1);
	};

	return {
		run,
	};
};
