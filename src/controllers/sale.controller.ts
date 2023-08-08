import 'express-async-errors';
import axios from 'axios';
import { Request, Response } from 'express';
import services from '../services';
import utils from '../utils';

class SaleController {
	static async create(req: Request, res: Response) {
		const authToken = req.headers.authorization;
		if (!authToken) { throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, 'Authorization token not found.'); }

		const { productCode, value } = req.body;
		await services.sale.create(value, productCode, authToken);
		return res.status(utils.httpStatus.CREATED).send("Sale registered.");
	}

	static async find(req: Request, res:Response) {
		const authToken = req.headers.authorization;
        if (!authToken) { throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, 'Authorization token not found.'); }

		const sales = await services.sale.find(authToken);
		return res.status(utils.httpStatus.OK).json(sales);
	}

	static async getTotal(req: Request, res: Response) {
		const authToken = req.headers.authorization;
        if (!authToken) { throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, 'Authorization token not found.'); }

		const response = await axios.get('https://mockbin.org/bin/b8c30345-7409-4a78-8021-29304ef32fff');
		if (response.data != 'cashback:200') { throw utils.errorGenerator(utils.httpStatus.INTERNAL_SERVER_ERROR, 'Authorization token not found.'); }

		const cashbackSum = await services.sale.getTotal(authToken); 
		return res.status(utils.httpStatus.OK).json({ cashbackTotal: cashbackSum });
	}
}

export default SaleController;