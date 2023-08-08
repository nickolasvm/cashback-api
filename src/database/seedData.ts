const users = [
	{
		username: 'Jhon Doe',
		cpf: '12345678901',
		email: 'jhon@email.com',
		password: 'myscretepassword',
		sales: [
			{
				productCode: 'Prato',
				value: 250,
				date: new Date(),
				status: 'Em validação',
				cashback: 25,
				cashbackPercentage: 0.1,
			},
			{
				productCode: 'Garfo',
				value: 500,
				date: new Date(),
				status: 'Em validação',
				cashback: 50,
				cashbackPercentage: 0.1,
			},
			{
				productCode: 'Faca',
				value: 150,
				date: new Date(),
				status: 'Em validação',
				cashback: 15,
				cashbackPercentage: 0.1,
			},
		],
	},
	{
		username: 'Jane Doe',
		cpf: '98765432189',
		email: 'jane@email.com',
		password: 'mysupersecretpassword',
		sales: [
			{
				productCode: 'Carro',
				value: 1200,
				date: new Date(),
				status: 'Em validação',
				cashback: 180,
				cashbackPercentage: 0.15,
			},
		],
	},
	{
		username: 'Grand Admin',
		cpf: '15350946056',
		email: 'admin@email.com',
		password: 'myadminpassword',
		sales: [
			{
				productCode: 'Prato',
				value: 1200,
				date: new Date(),
				status: 'Aprovado',
				cashback: 240,
				cashbackPercentage: 0.2,
			},
			{
				productCode: 'Garfo',
				value: 1500,
				date: new Date(),
				status: 'Aprovado',
				cashback: 300,
				cashbackPercentage: 0.2,
			},
			{
				productCode: 'Faca',
				value: 2000,
				date: new Date(),
				status: 'Aprovado',
				cashback: 400,
				cashbackPercentage: 0.2,
			},
		],
	},
];

export default users;