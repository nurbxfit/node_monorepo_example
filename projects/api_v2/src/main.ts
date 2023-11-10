import { HttpServer, SocketIOServer, TrpcServer } from "@nurbxfit/infra";
import dotenv from "dotenv";
import { router } from "./trpc/router";
import { createContext } from "vm";
import { ExampleRoutes } from "./http/routes/example.route";

dotenv.config();

async function main() {
	try {
		const { httpServer, app } = await HttpServer(
			[
				{
					path: "/api/v1/hello",
					router: ExampleRoutes,
				},
			],
			{
				port: Number(process.env.TRPC_PORT) ?? 4444,
			}
		).start();

		TrpcServer(app, router, createContext);
		SocketIOServer(httpServer);
	} catch (error) {
		console.error("Server Error:", error);
	}
}

main();
