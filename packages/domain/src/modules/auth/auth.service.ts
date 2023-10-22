import { BadRequestError, UserRepository } from "@nurbxfit/common";
import { userRepository } from "@nurbxfit/common/src/repositories/User.repo";

class AuthService {
	constructor(protected userRepo: UserRepository) {}

	async authenticate(email: string, password: string) {
		// do somethign (this is just a lazy implementation)
		const user = await this.userRepo.findUnique({
			where: { email },
			select: {
				id: true,
				email: true,
				name: true,
				active: true,
			},
		});

		if (!user) {
			throw new BadRequestError(
				"Authenication failed, please check your username or password"
			);
		}

		return user;
	}

	async register(email: string, password: string, name: string) {
		// do something (fake data right now)
		const existingUser = await this.userRepo.findUnique({
			where: {
				email,
			},
		});
		if (existingUser)
			throw new BadRequestError("Failed to register, user already exist");
		const newUser = await this.userRepo.create({
			data: {
				email,
				name,
				password,
			},
		});

		return newUser;
	}
}

export const authService = new AuthService(userRepository);
