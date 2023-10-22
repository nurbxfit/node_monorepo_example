import type { Express } from "express";
import * as trpcExpress from "@trpc/server/adapters/express";

export const TrpcServer = (
	httpServer: Express,
	router: any,
	createContext: any
) => {
	httpServer.use(
		"/trpc",
		trpcExpress.createExpressMiddleware({
			router,
			createContext,
		})
	);
};
