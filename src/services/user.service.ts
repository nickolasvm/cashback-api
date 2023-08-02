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
			throw utils.errorGenerator(utils.httpStatus.CONFLICT, 'User already registered');
		}

		const newUser = await models.user.create(data); 
		return newUser;
	}
}

export default UserService;