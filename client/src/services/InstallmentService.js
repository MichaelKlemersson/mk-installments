import http from '@/utils/http';

class InstallmentService {
  static getSplittedPayment(amount, times) {
    return http.post('installments', { amount, times });
  }
}

export default InstallmentService;
