import { HttpServer, TrpcServer } from "@nurbxfit/infra";
import dotenv from "dotenv";
import { router } from "./trpc/router";
import { createContext } from "vm";

dotenv.config();

async function main() {
	try {
		const httpServer = await HttpServer([], {
			port: Number(process.env.TRPC_PORT) ?? 4444,
		}).start();

		TrpcServer(httpServer, router, createContext);
	} catch (error) {
		console.error("Server Error:", error);
	}
}

main();
