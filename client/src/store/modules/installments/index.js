import actions from './actions';
import mutations from './mutations';

const installmentModule = {
  state: {
    finalAmount: 0,
  },
  actions,
  mutations,
};

export default installmentModule;
