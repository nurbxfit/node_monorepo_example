import { HttpError } from "./HttpError";

export class UnauthorizedError extends HttpError {
	constructor(message: string = "Unauthorized") {
		super(message, 401);
	}
}
