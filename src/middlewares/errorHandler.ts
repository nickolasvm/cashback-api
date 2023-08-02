import { Request, Response, NextFunction } from 'express';
import httpStatus from '../utils/httpStatus';

const errorHandler = (
	error: { status: number, message: string },
	_req: Request, 
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_next: NextFunction,
) => {
	if (error.status) {
		return res
			.status(error.status)
			.json({ message: error.message });
	}
	return res
		.status(httpStatus.INTERNAL_SERVER_ERROR)
		.json({ message: error.message });
};

export default errorHandler;