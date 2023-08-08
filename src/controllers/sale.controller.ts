import 'express-async-errors';
import { Request, Response } from 'express';
import services from '../services';
import utils from '../utils';

class SaleController {
	static async create(req: Request, res: Response) {
		const authToken = req.headers.authorization;
		if (!authToken) { throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, 'Authprization token not found.'); }

		const { productCode, value } = req.body;
		await services.sale.create(value, productCode, authToken);
		return res.status(utils.httpStatus.OK).send("Sale registered.");
	}

	static async find(req: Request, res:Response) {
		const authToken = req.headers.authorization;
        if (!authToken) { throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, 'Authprization token not found.'); }

		const sales = await services.sale.find(authToken);
		return res.status(utils.httpStatus.OK).json(sales);
	}
}

export default SaleController;