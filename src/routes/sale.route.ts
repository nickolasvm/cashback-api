import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/', controllers.sale.find);
router.post('/', controllers.sale.create);

export default router;