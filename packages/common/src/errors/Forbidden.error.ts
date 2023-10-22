import { HttpError } from "./HttpError";

export class ForbiddenError extends HttpError {
	constructor(message: string = "Forbidden!") {
		super(message, 403);
	}
}
