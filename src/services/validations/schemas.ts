import Joi from 'joi';

const userSchema = Joi.object({
	username: Joi.string().required(),
	cpf: Joi.string().length(11).pattern(/^\d+$/).required(),
	email: Joi.string().email({ tlds: { allow: false } }).required(),
	password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
	email: Joi.string().email({ tlds: { allow: false } }).required(),
	password: Joi.string().min(6).required(),
});

const newSaleSchema = Joi.object({
	productCode: Joi.string().required(),
	value: Joi.number().positive().required(),
});

export default {
	userSchema,
	loginSchema,
	newSaleSchema,
};