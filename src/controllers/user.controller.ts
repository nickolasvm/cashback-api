import 'express-async-errors';
import { Request, Response } from 'express';
import services from '../services';
import httpStatus from '../utils/httpStatus';

class UserController {
	static async create(req: Request, res: Response) {
		const data = req.body;
		await services.user.create(data);

		return res.status(httpStatus.OK).send('User created successfully.');
	}
}

export default UserController;
