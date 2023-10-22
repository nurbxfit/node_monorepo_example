import { Request, Response, NextFunction } from "express";
import { PostRequestObject } from "@nurbxfit/infra";
import { LoginRequest, RegisterRequest, authService } from "@nurbxfit/domain";

export const AuthController = {
	async login(
		req: PostRequestObject<LoginRequest>,
		res: Response,
		next: NextFunction
	) {
		const { email, password } = req.body;
		const result = await authService.authenticate(email, password);

		// do something
		return res.status(200).json({
			sucess: true,
			data: result,
		});
	},

	async register(
		req: PostRequestObject<RegisterRequest>,
		res: Response,
		next: NextFunction
	) {
		const { email, password, name } = req.body;
		const result = await authService.register(email, password, name);

		return res.status(200).json({
			success: true,
			data: result,
		});
	},
};
