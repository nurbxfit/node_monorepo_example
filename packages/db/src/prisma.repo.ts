import { PrismaClient } from "@prisma/client";

export class PrismaRepository<
	K extends Exclude<keyof PrismaClient, symbol | `$${string}`>
> {
	constructor(private readonly _model: any) {}

	async aggregate(...args: Parameters<PrismaClient[K]["aggregate"]>) {
		return await (this._model.aggregate as any)(...args);
	}

	async count(...args: Parameters<PrismaClient[K]["count"]>) {
		return await (this._model.count as any)(...args);
	}

	async create(...args: Parameters<PrismaClient[K]["create"]>) {
		return await (this._model.create as any)(...args);
	}

	async createMany(...args: Parameters<PrismaClient[K]["createMany"]>) {
		return await (this._model.createMany as any)(...args);
	}

	async delete(...args: Parameters<PrismaClient[K]["delete"]>) {
		return await (this._model.delete as any)(...args);
	}

	async deleteMany(...args: Parameters<PrismaClient[K]["deleteMany"]>) {
		return await (this._model.deleteMany as any)(...args);
	}

	async findFirst(...args: Parameters<PrismaClient[K]["findFirst"]>) {
		return await (this._model.findFirst as any)(...args);
	}

	async findFirstOrThrow(
		...args: Parameters<PrismaClient[K]["findFirstOrThrow"]>
	) {
		return await (this._model.findFirstOrThrow as any)(...args);
	}

	async findMany(...args: Parameters<PrismaClient[K]["findMany"]>) {
		return await (this._model.findMany as any)(...args);
	}

	async findUnique(...args: Parameters<PrismaClient[K]["findUnique"]>) {
		return await (this._model.findUnique as any)(...args);
	}

	async findUniqueOrThrow(
		...args: Parameters<PrismaClient[K]["findUniqueOrThrow"]>
	) {
		return await (this._model.findUniqueOrThrow as any)(...args);
	}

	async groupBy(...args: Parameters<PrismaClient[K]["groupBy"]>) {
		return await (this._model.groupBy as any)(...args);
	}

	async update(...args: Parameters<PrismaClient[K]["update"]>) {
		return await (this._model.update as any)(...args);
	}

	async updateMany(...args: Parameters<PrismaClient[K]["updateMany"]>) {
		return await (this._model.updateMany as any)(...args);
	}

	async upsert(...args: Parameters<PrismaClient[K]["upsert"]>) {
		return await (this._model.upsert as any)(...args);
	}
}
