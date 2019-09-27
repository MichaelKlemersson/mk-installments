import ValidationError from "../error/ValidatorError";

/**
 * Class SplitPaymentService
 */
class SplitPaymentService {
  constructor() {
    this.minSplitTimes = 1;
    this.maxSplitTimes = 5;
    this.minLoan = 10000;
    this.maxLoan = 100000;
  }

  /**
   * @param int amount 
   * @param int times 
   */
  split(amount, times) {
    if (amount < this.minLoan || amount > this.maxLoan) {
      throw new ValidationError(`The load should not be greather less than ${this.minLoan} or greater than ${this.maxLoan}`);
    }

    if (times < this.minSplitTimes || times > this.maxSplitTimes) {
      throw new ValidationError(`Can not split payment less than ${this.minSplitTimes} or greater than ${this.maxSplitTimes} times`);
    }

    const finalAmount = amount / times;

    return finalAmount.toFixed(2);
  }
}

export default SplitPaymentService;
