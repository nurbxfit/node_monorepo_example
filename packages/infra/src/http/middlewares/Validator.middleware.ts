import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const RequestValidatorMiddleware =
	(Schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
		try {
			Schema.parse({
				body: req.body,
				query: req.query,
				params: req.params,
			});
			next();
		} catch (error) {
			return res.status(400).send(error);
		}
	};
