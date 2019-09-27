import SplitPaymentService from '../../../src/services/SplitPaymentService';

describe('SplitPaymentServiceTest', () => {
  let paymentService = null;

  beforeEach(() => {
    paymentService = new SplitPaymentService();
  });

  test('it should not allow split loans out of range', () => {
    const payments = [
      { value: 9999, times: 1 },
      { value: 100001, times: 1 }
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
      { value: 10000, times: 1, expected: 10000.00 },
      { value: 10000, times: 2, expected: 5000.00 },
      { value: 10000, times: 3, expected: 3333.33 }
    ];

    payments.forEach((payment) => {
      expect(paymentService.split(payment.value, payment.times)).toBe(payment.expected.toFixed(2));
    });
  });
});
