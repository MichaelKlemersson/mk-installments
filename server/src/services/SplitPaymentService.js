/**
 * Class SplitPaymentService
 */
class SplitPaymentService {
  constructor() {
    this.minSplitTimes = 1;
    this.maxSplitTimes = 5;
  }

  /**
   * @param int amount 
   * @param int times 
   */
  split(amount, times) {
    if (amount < 0) {
      throw new Error('Can not split a negative amount');
    }

    if (times < this.minSplitTimes || times > this.maxSplitTimes) {
      throw new Error(`Can not split payment less than ${this.minSplitTimes} or more than ${this.maxSplitTimes} times`);
    }

    const finalAmount = amount / times;

    return finalAmount.toFixed(2);
  }
}

export default SplitPaymentService;
