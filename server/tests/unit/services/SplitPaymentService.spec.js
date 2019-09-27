import SplitPaymentService from '../../../src/services/SplitPaymentService';

describe('SplitPaymentServiceTest', () => {
  let paymentService = null;

  beforeEach(() => {
    paymentService = new SplitPaymentService();
  });

  test('it should not allow split with negative amount', () => {
    const payments = [
      { value: -1, times: 1 },
      { value: 0, times: 1 }
    ];

    payments.forEach((payment) => {
      expect(() => paymentService.split(payment.value, payment.times)).toThrow();
    });
  });

  test('it should only split between 1 to 5 times', () => {
    const payments = [
      { value: 1000, times: 0 },
      { value: 1000, times: 6 }
    ];

    payments.forEach((payment) => {
      expect(() => paymentService.split(payment.value, payment.times)).toThrow();
    });
  });

  test('it should split payment with a given amount', () => {
    const payments = [
      { value: 1000, times: 1, expected: 1000.00 },
      { value: 1000, times: 2, expected: 500.00 },
      { value: 1000, times: 3, expected: 333.33 }
    ];

    payments.forEach((payment) => {
      expect(paymentService.split(payment.value, payment.times)).toBe(payment.expected.toFixed(2));
    });
  });
});
