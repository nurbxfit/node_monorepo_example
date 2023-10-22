import { Request } from "express";

export type GetRequestObject<ZodSchema> = Request & {
	query: ZodSchema;
};

export type PostRequestObject<ZodSchema> = Request & {
	body: ZodSchema;
};
