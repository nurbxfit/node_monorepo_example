import { PrismaClient } from ".prisma/client";
import { PrismaRepository, dbClient } from "@nurbxfit/db";

export class UserRepository extends PrismaRepository<"user"> {
	constructor(private ctx: PrismaClient) {
		super(ctx.user);
	}

	async someExtendedMethod() {
		const result = await this.findFirst({ where: { id: 1 } });
		return result.email + " Hell World";
	}
}

export const userRepository = new UserRepository(dbClient);
