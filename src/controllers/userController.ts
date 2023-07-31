import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
	static async createUser(req: Request, res: Response) {
		try {
			const { name, cpf, email, password } = req.body;
			const user = await userService.createUser(name, cpf, email, password);
			res.json(user);
		} catch (error) {
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async getUserByEmail(req: Request, res: Response) {
		try {
			const { email } = req.params;
			const user = await userService.getUserByEmail(email);
			res.json(user);
		} catch (error) {
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}

export default UserController;
