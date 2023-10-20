import { GetUserRequest, userService } from "@nurbxfit/domain";
import { Request, Response, NextFunction } from "express";

type RequestObject<ZodSchema> = Request & {
	query: ZodSchema;
};

export const UserController = {
	async getUser(
		req: RequestObject<GetUserRequest>,
		res: Response,
		next: NextFunction
	) {
		const { email } = req.query;

		const result = await userService.getUserByEmail(email);
		return res.status(200).json({
			data: result,
		});
	},
};
