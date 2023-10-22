import { ApiErrorHandlerMiddleware, HttpServer } from "@nurbxfit/infra";
import dotenv from "dotenv";
import { ExampleRoutes } from "./routes/example.route";
import { UserRoutes } from "./routes/user.route";
import { AuthRoutes } from "./routes/auth.routes";

dotenv.config();

async function main() {
	try {
		console.log("Process.env.DATABASE_URL:", process.env.DATABASE_URL);
		/**
		 * This part look too messy maybe can make it more compact
		 * ntah lah, nanti jadi complicated sgt pulak.
		 */
		// const httpServer =
		await HttpServer(
			[
				{
					path: "/api/v1/hello",
					router: ExampleRoutes,
				},
				{
					path: "/api/v1/users",
					router: UserRoutes,
				},
				{
					path: "/api/v1/auth",
					router: AuthRoutes,
				},
			],
			{
				port: Number(process.env.HTTP_PORT) ?? 4444,
				globalMiddlewares: [ApiErrorHandlerMiddleware],
			}
		).start();
		// console.log(httpServer)
	} catch (err: any) {
		console.error("API server Error:", err);
	}
}

main();
