import Vue from 'vue';
import Vuex from 'vuex';
import installments from './modules/installments';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    installments,
  },
});
