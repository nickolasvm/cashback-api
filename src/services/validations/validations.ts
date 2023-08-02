import joiSchemas from './schemas';

const validateUser = (payload: object) => {
	const { error } = joiSchemas.userSchema.validate(payload);
	if (error) return { type: error.details[0].type, message: error.message };

	return { type: null, message: '' };
};

export default {
	validateUser,
};