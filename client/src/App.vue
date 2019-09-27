<template>
  <div id="app" class="container app-container">
    <div class="row">
      <div class="col-md-12">
        <div class="card ml-auto mr-auto">
          <div class="card-body">
            <InstallmentForm />
          </div>
        </div>
      </div>

      <div class="col-md-12 mt-4">
        <div class="card ml-auto mr-auto">
          <div class="card-body text-center" id="installment-final-amount">
            Monthly amount <strong>{{ monthlyAmount }} EUR</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import InstallmentForm from './components/InstallmentForm.vue';
import store from '@/store';

export default {
  name: 'app',
  store,
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    InstallmentForm
  },
  computed: {
    ...mapState({
      monthlyAmount: state => state.installments.finalAmount
    })
  }
};
</script>

<style lang="css">
  @import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f4f4;
  }

  .card {
    background-color: #fff;
    max-width: 640px;
  }
</style>
