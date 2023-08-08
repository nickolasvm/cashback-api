import { Request, Response, NextFunction } from 'express';
import utils from '../utils';
import models from '../models';

const authorization = async (
	req: Request, 
	_res: Response,
	next: NextFunction,
) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
        throw utils.errorGenerator(utils.httpStatus.UNATHORIZED, 'Authorization token not found.');
    }

    const { cpf } = utils.decodeToken(authToken).data;
    
    const findUser = await models.user.findOne({ cpf });
    if (!findUser) {
        throw utils.errorGenerator(utils.httpStatus.UNATHORIZED, 'Incorrect authorization token.');
    }

    next();
};

export default authorization;