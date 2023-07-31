import User from '../models/userModel';

class UserService {
	static async createUser(name: string, cpf: number, email: string, password: string) {
		return User.create({ name, cpf, email, password });
	}

	static async getUserByEmail(email: string) {
		return User.findOne({ email });
	}
}

export default UserService;