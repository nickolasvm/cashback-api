import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/', controllers.sale.find);
router.get('/total', controllers.sale.getTotal);
router.post('/', controllers.sale.create);

export default router;