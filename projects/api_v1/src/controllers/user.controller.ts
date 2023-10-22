import { GetUserRequest, userService } from "@nurbxfit/domain";
import { Request, Response, NextFunction } from "express";
import { GetRequestObject } from "@nurbxfit/infra";

export const UserController = {
	async getUser(
		req: GetRequestObject<GetUserRequest>,
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
