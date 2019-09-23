import ValidationError from '../../error/ValidatorError';

class SplitPaymentRequestValidator {
  constructor() {
    this.requiredParameters = ['amount', 'times'];
  }

  validate(request) {
    let missedParameters = [];
    const requestContent = request.body;

    this.requiredParameters.forEach((parameter) => {
      if (Object.keys(requestContent).indexOf(parameter) === -1) {
        missedParameters.push(parameter);
      }
    });

    if (missedParameters.length) {
      missedParameters = JSON.stringify(missedParameters);
      throw new ValidationError(`Missing required parameters: ${missedParameters}`);
    }
  }
}

export default SplitPaymentRequestValidator;
