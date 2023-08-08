import models from '../models';
import ISale from '../models/sale.model';
import joiValidation from './validations/validations';
import utils from '../utils';

type Sale = {
	_id?: string;
	productCode: string;
	value: number;
	date: Date;
	status: string;
	cashback: number;
}

class SaleService {
	static async create(value: number, productCode: string, authToken: string) {
		const error = joiValidation.validateNewSale({ value, productCode });
		if (error.type) {
			throw utils.errorGenerator(utils.httpStatus.BAD_REQUEST, error.message);
		}

		const cpf = this.findCpf(authToken);
		const findUser = await models.user.findOne({ cpf });
		if (!findUser) {
			throw utils.errorGenerator(utils.httpStatus.CONFLICT, 'User not found.');
		}

		let status = 'Em validação';
		if (cpf === '15350946056') { status = 'Aprovado'; }
		
		const newSale = { value, productCode, status, cashback: value * 0.10 };
		await models.user.updateOne({ cpf }, { $push: { sales: newSale } });

		const sales = await this.find(cpf);
		const monthlySales = await this.getMonthlySales(sales);
		const updatedSales = this.defineCashback(monthlySales.monthSales, monthlySales.sumSales)
		await this.updateCashback(updatedSales, cpf);
	}

	static findCpf(authToken: string) {
		const { cpf } = utils.decodeToken(authToken).data;
		return cpf;
	}

	static async find(cpf: string) {
		const userSales = await models.user.find({ cpf }).populate('sales')
		return userSales[0].sales;
	}

	static async getMonthlySales(sales: Array<Sale>) {
		const actualMonth = new Date().getMonth();
		let sumSales = 0;
		const monthSales = sales.filter((sale) => {
			const saleMonth = new Date(sale.date).getMonth();
			if (actualMonth === saleMonth) {
				sumSales += sale.value
				return sale
			}
		})

		return { monthSales, sumSales };
	}

	static defineCashback(sales: Array<Sale>, salesTotal: number) {
		let cashbackPercent = 0;
		if (salesTotal <= 1000) { cashbackPercent = 0.10 };
		if (salesTotal > 1000 && salesTotal <= 1500) { cashbackPercent = 0.15 };
		if (salesTotal > 1500) { cashbackPercent = 0.20 };

		sales.forEach((sale) => {
			sale.cashback = sale.value * cashbackPercent; 
		});

		return sales;
	}

	static async updateCashback(sales: Array<Sale>, cpf: number) {
		await models.user.findOneAndUpdate({ cpf }, { sales });
	}
}

export default SaleService;