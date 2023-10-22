import { Request, Response, NextFunction } from "express";

export const ApiErrorHandlerMiddleware = (
	error: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (error.statusCode) {
		return res.status(error.statusCode).json({
			message: error.message,
			error: error,
		});
	} else {
		return res.status(500).json({
			message: "Internal Server Error",
			error: error,
		});
	}
};
