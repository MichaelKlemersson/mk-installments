import { Router } from 'express';
import splitPayment from './installments';

const router = Router();

router.post('/installments', splitPayment);

export default router;
