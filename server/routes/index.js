const router = require('express').Router();
const { getInstallments } = require('./installments');

router.get('installments', getInstallments);

module.exports = router;