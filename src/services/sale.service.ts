import models from '../models';
import joiValidation from './validations/validations';
import utils from '../utils';

class SaleService {
	static async create(value: number, productCode: string, authToken: string | undefined) {
		const error = joiValidation.validateNewSale({ value, productCode });
		if (error.type) {
			throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, error.message);
		}

		if (!authToken) {
			throw utils.errorGenerator(utils.httpStatus.UNATHORIZED, 'Incorrect authorization token.');
		}
		const { cpf } = utils.decodeToken(authToken).data;

		const findUser = await models.user.findOne({ cpf });
		if (!findUser) {
			throw utils.errorGenerator(utils.httpStatus.CONFLICT, 'User not found.');
		}

		let status = 'Em validação';
		if (cpf === '15350946056') { status = 'Aprovado'; }

		const newSale = await models.sale.create({ value, productCode, status, date: new Date().toString() });
		return newSale;
	}
}

export default SaleService;