import ValidationError from '../../error/ValidatorError';

class SplitPaymentRequestValidator {
  constructor() {
    this.requiredParameters = ['amount', 'times'];
  }

  validate(request) {
    if (request.body.length === 0) {
      const missedParameters = JSON.stringify(this.requiredParameters);
      throw new ValidationError(`Missing required parameters: ${missedParameters}`);
    }

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
