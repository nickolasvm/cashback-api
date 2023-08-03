import app from './app';

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, async () => {
	console.log(`Server is running on port: ${PORT}`);
});

export default server;