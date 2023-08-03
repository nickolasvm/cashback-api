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
			},
			{
				productCode: 'Garfo',
				value: 500,
				date: new Date(),
				status: 'Em validação',
			},
			{
				productCode: 'Faca',
				value: 150,
				date: new Date(),
				status: 'Em validação',
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
			},
			{
				productCode: 'Garfo',
				value: 1500,
				date: new Date(),
				status: 'Aprovado',
			},
			{
				productCode: 'Faca',
				value: 2000,
				date: new Date(),
				status: 'Aprovado',
			},
		],
	},
];

export default users;