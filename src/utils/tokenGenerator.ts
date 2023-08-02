import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtConfig = {
	expiresIn: '3d',
};

const createToken = (user: { cpf: string }) => {
	return jwt.sign(
		{ data: { cpf: user.cpf } },
		process.env.JWT_SECRET as Secret,
		jwtConfig,
	);
};

export default createToken;