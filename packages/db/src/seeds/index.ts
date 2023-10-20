import { PrismaClient } from "@prisma/client";

import { UserSeed } from "./user.seed";

const prisma = new PrismaClient();
async function main() {
	await UserSeed(prisma).run();
}

main()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
		console.log("Seed completed!");
	});
