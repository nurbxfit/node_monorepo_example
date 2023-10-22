import { z } from "zod";

const LoginRequestBodySchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export const LoginRequestSchema = z.object({
	body: LoginRequestBodySchema,
});

export type LoginRequest = z.infer<typeof LoginRequestBodySchema>;

const RegisterRequestBodySchema = z.object({
	email: z.string().email(),
	password: z.string(),
	name: z.string(),
});

export const RegisterRequestSchema = z.object({
	body: RegisterRequestBodySchema,
});

export type RegisterRequest = z.infer<typeof RegisterRequestBodySchema>;
