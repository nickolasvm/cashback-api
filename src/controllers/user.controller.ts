import 'express-async-errors';
import { Request, Response } from 'express';
import services from '../services';
import utils from '../utils';

class UserController {
	static async create(req: Request, res: Response) {
		const data = req.body;
		await services.user.create(data);

		return res.status(utils.httpStatus.OK).send('User created successfully.');
	}

	static async login(req: Request, res: Response) {
		const { email, password } = req.body;
		const user = await services.user.login(email, password);
		const token = utils.createToken(user);

		return res.status(utils.httpStatus.OK).json({ token });
	}
}

export default UserController;
