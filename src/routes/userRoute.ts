import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:email', userController.getUserByEmail);

export default router;