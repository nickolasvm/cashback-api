import { connectDB, disconnectDB } from './connection';
import userSeed from './seedData';
import userModel from '../models/user.model';

const seedDatabase = async () => {
	try {
		await connectDB();
		await userModel.deleteMany({});
		await userModel.insertMany(userSeed);
		console.log('Database seeding completed');
	} catch (err) {
		console.error('Error seeding database:', err);
	} finally {
		await disconnectDB();
	}
};

seedDatabase();
