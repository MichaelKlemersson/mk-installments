import { shallowMount } from '@vue/test-utils';
import InstallmentForm from '@/components/InstallmentForm.vue';
import InstallmentService from '@/services/InstallmentService';

describe('InstallmentForm.vue', () => {
  test('should send request to split payment', () => {
    const component = shallowMount(InstallmentForm, {
      data() {
        return { amount: 10000, times: 1 };
      }
    });
    const spy = jest.spyOn(InstallmentService, 'getSplittedPayment');

    component.vm.doSplitPayment();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
