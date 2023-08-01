import app from './app';
import seedDB from './database/seeder';

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, async () => {
	await seedDB();
	console.log(`Server is running on port: ${PORT}`);
});

export default server;