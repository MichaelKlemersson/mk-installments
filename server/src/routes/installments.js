import SplitPaymentService from '../services/SplitPaymentService';
import SplitPaymentRequestValidator from '../validation/request/SplitPaymentRequestValidator';

const requestValidator = new SplitPaymentRequestValidator();
const splitPaymentService = new SplitPaymentService();

const splitPayment = (req, res) => {
  try {
    requestValidator.validate(req);

    return res.json({
      data: splitPaymentService.split(req.body.amount, req.body.times)
    });
  } catch (error) {
    switch (error.name) {
      case 'ValidationError':
        return res.status(422).json({ error: error.message });

      default:
        return res.status(500).json({ error: error.message });
    }
  }
};

export default splitPayment;
