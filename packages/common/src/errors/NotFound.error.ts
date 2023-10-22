import { HttpError } from "./HttpError";

export class NotFoundError extends HttpError {
	constructor(message: string = "Not found!") {
		super(message, 404);
	}
}
