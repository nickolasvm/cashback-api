import connectDB from './connection';
import userModel from '../models/userModel';
import users from './seedData';

const seedDatabase = async () => {
	await connectDB();

	try {
		// Delete existing data before seeding
		await userModel.deleteMany({});

		// Seed the database
		await userModel.insertMany(users);

		console.log('Database seeding completed');
	} catch (err) {
		console.error('Error seeding database:', err);
	}
};

export default seedDatabase;
