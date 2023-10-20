import { HttpServer } from "@nurbxfit/infra";
import dotenv from "dotenv";
import { exampleRoutes } from "./routes/example.route";

dotenv.config();

async function main() {
	try {
		/**
		 * This part look too messy maybe can make it more compact
		 * ntah lah, nanti jadi complicated sgt pulak.
		 */
		// const httpServer =
		await HttpServer(
			[
				{
					path: "/api/v1",
					router: exampleRoutes,
				},
			],
			{
				port: Number(process.env.HTTP_PORT) ?? 4444,
			}
		).start();
		// console.log(httpServer)
	} catch (err: any) {
		console.error("API server Error:", err);
	}
}

main();
