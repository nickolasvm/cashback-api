import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtConfig = {
	expiresIn: '3d',
};

const createToken = (user: { email: string }) => {
	return jwt.sign(
		{ data: { email: user.email } },
		process.env.JWT_SECRET as Secret,
		jwtConfig,
	);
};

export default createToken;