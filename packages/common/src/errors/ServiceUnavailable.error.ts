import { HttpError } from "./HttpError";

export class ServiceUnavailableError extends HttpError {
	constructor(message: string) {
		super(message, 503);
	}
}
