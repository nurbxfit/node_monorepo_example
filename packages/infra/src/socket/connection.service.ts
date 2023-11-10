/**
 * This connection service, will listen to every connection, and store it in memory so can be used later by other service
 */

import { Socket, Server } from "socket.io";

export class SocketConnectionService {
	connections = new Map();
	io: Server | undefined;
	constructor() {}

	init(io: Server) {
		this.io = io;
		io.on("connection", (socket) => {
			console.log("socket_connected:", socket.handshake.headers);
			const key = socket.handshake.headers["x-api-key"];
			if (!key) {
				socket.disconnect(true);
			} else {
				this.connections.set(key, socket.id);
			}

			socket.on("disconnect", (reason, description) => {
				console.log("Disconnect_reason:", reason);
				console.log("Disconnect_description:", description);
				onDisconnected(socket);
			});

			console.log("ConnectionList:", this.connections);
		});

		const onDisconnected = (socket: Socket) => {
			// remove socket.id
			for (const [key, value] of this.connections) {
				if (value == socket.id) {
					this.connections.delete(key);
					break;
				}
			}
			console.log("Disconnect_connection_list:", this.connections);
		};
	}

	sendToMachine(machineKey: string, eventName: string, data: any) {
		if (!this.io) throw new Error("No socket connections");
		const socketId = this.connections.get(machineKey);
		this.io.in(socketId).emit(eventName, data);
	}
}

export const socketConnectionService = new SocketConnectionService();
