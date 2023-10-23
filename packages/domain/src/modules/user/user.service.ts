import { UserRepository, userRepository } from "@nurbxfit/common";

/**
 * Should use tsyringe or something for DI, but too lazy
 */
class UserService {
	constructor(protected userRepo: UserRepository) {}

	async getUserByEmail(email: string) {
		const user = await this.userRepo.findUnique({
			where: {
				email,
			},
		});
		return user;
	}
}

export const userService = new UserService(userRepository);
