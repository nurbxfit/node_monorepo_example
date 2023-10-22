import { trpcPublicProcedure, trpcRouter } from "@nurbxfit/infra";

export const router = trpcRouter({
	greet: trpcPublicProcedure.query(async (opts) => {
		return "Hello World!";
	}),
});
