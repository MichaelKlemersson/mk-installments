import http from '@/utils/http';
import InstallmentService from '@/services/InstallmentService';

http.post = jest.fn(() => '5.00');
jest.mock('@/utils/http');

describe('InstallmentService.js', () => {
  test('should send a request to get the payment splitted', async () => {
    const spy = jest.spyOn(http, 'post');
    await InstallmentService.getSplittedPayment(10, 2);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
