import { UserRepository } from "@nurbxfit/common";
import { userRepository } from "@nurbxfit/common/src/repositories/User.repo";

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
