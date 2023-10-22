import { Request, Response, NextFunction } from "express";

type Controller = (req: Request, res: Response, next: NextFunction) => any;

export const HttpController = (controller: Controller) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			if (typeof controller === "function") {
				await controller(req, res, next);
			} else {
				// If the provided controller is not a function, it should be treated as an error.
				next(new Error("Invalid controller function"));
			}
		} catch (error: any) {
			next(error);
		}
	};
};
