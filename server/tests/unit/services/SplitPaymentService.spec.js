import SplitPaymentService from '../../../src/services/SplitPaymentService';

describe('SplitPaymentServiceTest', () => {
  // test('it should not allow split with negative amount', () => {});

  // test('it should not allow split with negative value', () => {});

  test('it should split payment with a given amount', () => {
    const payments = [
      { value: 1000, times: 1, expected: 1000 },
      { value: 1000, times: 2, expected: 500 },
      { value: 1000, times: 3, expected: 333.33 },
    ];

    payments.forEach((payment) => {
      expect(SplitPaymentService.split(payment.value, payment.times)).toBe(payment.expected);
    });
  });
});
