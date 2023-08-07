import 'express-async-errors';
import { Request, Response } from 'express';
import services from '../services';
import utils from '../utils';

class SaleController {
	static async create(req: Request, res: Response) {
		const authToken = req.headers.authorization;
		const { productCode, value } = req.body;
        
		await services.sale.create(value, productCode, authToken);
		return res.status(utils.httpStatus.OK).send("Sale registered.");
	}
}

export default SaleController;