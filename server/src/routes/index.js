import { Router } from 'express';
import { getInstallments } from './installments';

const router = Router();

router.get('installments', getInstallments);

module.exports = router;
