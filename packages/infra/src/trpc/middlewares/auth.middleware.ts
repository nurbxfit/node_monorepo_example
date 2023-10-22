import { TRPCError } from "@trpc/server";

export const checkJWT = async (opts: any) => {
	const { ctx } = opts as any;

	const token = ctx.req.headers["authorization"];
	if (!token) {
		throw new TRPCError({ code: "BAD_REQUEST" });
	}

	// do checking if token valid or note.
	// throw error if not valid throw new TRPCError({code:"UNAUTHORIZED"})

	return opts.next({
		ctx: {
			// user
		},
	});
};
