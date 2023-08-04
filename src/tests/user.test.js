import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import userModel from '../models/user.model';
import utils from '../utils';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing user cases', () => {
	describe('The create method, when successfull', () => {
		const mock_input = {
			username: 'Jhonny Test',
			cpf: '12345678910',
			email: 'test@test.com',
			password: 'atestpassword',
		};

		beforeEach(async () => {
			sinon
				.stub(userModel, 'create')
				.resolves();
			sinon
				.stub(userModel, 'findOne')
				.resolves();
		});

		afterEach(() => {
			(userModel.create).restore();
			(userModel.findOne).restore();
		});

		it('should return HTTP status 200', async () => {
			const response = await chai.request(app).post('/user').send(mock_input);
			expect(response.status).to.equal(200);
		});

		it('should create a new user and return a message', async () => {
			const response = await chai.request(app).post('/user').send(mock_input);
			expect(response.text).to.equal('User created successfully.');
		});
	});

	describe('The login method, when successfull', () => {
		const mock_input = {
			email: 'test@test.com',
			password: 'atestpassword',
		};

		beforeEach(async () => {
			sinon
				.stub(userModel, 'findOne')
				.resolves({ password: 'atestpassword' });
			sinon
				.stub(utils, 'createToken')
				.resolves()
		});

		afterEach(() => {
			(userModel.findOne).restore();
			(utils.createToken).restore();
		});

		it('should return HTTP status 200', async () => {
			const response = await chai.request(app).post('/login').send(mock_input);
			expect(response.status).to.equal(200);
		});

		it('should login the user and return JWT token', async () => {
			const response = await chai.request(app).post('/login').send(mock_input);
			expect(response.text).to.equal('{"token":{}}');
		});
	});
});