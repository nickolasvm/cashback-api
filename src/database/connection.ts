import { connect, disconnect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_HOST, MONGO_PORT, MONGO_DB, MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD } = process.env;

const DB_URL = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

export const connectDB = async () => {
	try {
		await connect(DB_URL);
		console.log('Connected to database.');
	} catch (e) {
		if (e instanceof Error) {
			console.error('Database connection failed: ', e.message);
		} else {
			console.log(e);
		}
	}
};

export const disconnectDB = async () => {
	await disconnect();
	console.log('Disconnected to database.');
};
