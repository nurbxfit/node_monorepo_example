import { z } from "zod";

const GetUserRequestQuerySchema = z.object({
	email: z.string().email(),
});

export const GetUserRequestSchema = z.object({
	query: GetUserRequestQuerySchema,
});

export type GetUserRequest = z.infer<typeof GetUserRequestQuerySchema>;
