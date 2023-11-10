import { Server as HttpServer } from "http";
import { Server } from "socket.io";
import { socketConnectionService } from "./connection.service";

export const SocketIOServer = (httpServer: HttpServer) => {
	const io = new Server(httpServer, {
		cors: {
			origin: "*",
		},
	});

	io.engine.on("connection_error", (err) => {
		console.log(err.req); // the request object
		console.log(err.code); // the error code, for example 1
		console.log(err.message); // the error message, for example "Session ID unknown"
		console.log(err.context); // some additional error context
	});
	socketConnectionService.init(io);
};
