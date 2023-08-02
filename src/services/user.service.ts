import models from '../models';
import joiValidation from './validations/validations';
import utils from '../utils';

class UserService {
	static async create(data: {
		username: string,
		cpf: string,
		email: string,
		password: string,
	}) {
		const error = joiValidation.validateUser(data);
		if (error.type) {
			throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, error.message);
		}

		const { email } = data;
		const findUser = await models.user.findOne({ email });
		if (findUser) {
			throw utils.errorGenerator(utils.httpStatus.CONFLICT, 'User already registered.');
		}

		const newUser = await models.user.create(data); 
		return newUser;
	}

	static async login(email: string, password: string) {
		const error = joiValidation.validateLogin({ email, password });
		if (error.type) {
			throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, 'Some required fields are missing.');
		}

		const user = await models.user.findOne({ email });
		if (!user || user.password !== password) {
			throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, 'Invalid fields.');
		}

		return user;
	}
}

export default UserService;