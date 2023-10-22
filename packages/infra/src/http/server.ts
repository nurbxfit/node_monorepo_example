import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

type ServerRoutes = { path: string; router: express.Router }[];

export type CustomMiddleware = (
	error: any,
	req: Request,
	res: Response,
	next: NextFunction
) => any;
/**
 * Server.ts
 * Exampel usage:
 *
 * const server = HttpServer([
 *  {path:'/auth', router: authRoutes},
 *  {path:'/api/v1', router: apiV1Routes},
 *  {path:'/api/v2', router: apiV2Routes},
 * ]).start()
 *
 * @param routes
 */

export const HttpServer = (
	routes: ServerRoutes,
	options: {
		port?: number;
		corsOptions?: cors.CorsOptions;
		bodyParserOptions?: bodyParser.OptionsJson;
		globalMiddlewares?: CustomMiddleware[];
	}
) => {
	const {
		port = 4444,
		corsOptions = {},
		bodyParserOptions = {
			limit: "10mb",
		},
	} = options;
	// create an express app
	const httpServer: Express = express();

	httpServer.use(cors(corsOptions));

	httpServer.use(
		bodyParser.urlencoded({ extended: false, ...bodyParserOptions })
	);
	httpServer.use(bodyParser.json(bodyParserOptions));

	for (const { path, router } of routes) {
		httpServer.use(path, router);
	}

	if (options.globalMiddlewares) {
		for (const middleware of options?.globalMiddlewares) {
			httpServer.use(middleware);
		}
	}

	// disable x-powered-by header
	httpServer.disable("x-powered-by");

	const PORT = port ?? (process.env.HTTP_PORT || 4444);
	const start = () => {
		try {
			httpServer.listen(PORT, () => {
				console.log(`HTTP server started on port: ${PORT}`);
			});
		} catch (err) {
			console.error("Http_server_failed to start:", err);
		}
	};

	return {
		start,
	};
};
