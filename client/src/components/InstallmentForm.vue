<template>
  <div>
    <div class="alert alert-danger" role="alert" v-show="failedRequest">
      OPS! Something went wrong.
      <br>
      <strong>{{ errorMessage }}</strong>
    </div>

    <form @submit.prevent="doSplitPayment" autocomplete="off"
      class="row installment-form">

      <div class="col-md-6">
        <label class="" for="amount">Amount: </label>
        <input
            type="number"
            class="form-control amount field"
            required
            id="amount"
            placeholder="Amount"
            maxlength="6"
            v-model="amount"
          />
        <small id="amount-field-validation" class="form-text text-danger"
          v-show="!isAmountFieldValid">
          The amount field should be a value between 10000 to 100000.
        </small>
      </div>

      <div class="col-md-6">
        <label class="mt-2 mt-md-0" for="times">Times: </label>
        <input
          type="number"
          required
          class="form-control times field"
          id="times"
          placeholder="Times"
          maxlength="1"
          v-model="times"
        />
        <small id="times-field-validation" class="form-text text-danger"
          v-show="!isTimesFieldValid">
          The times field should be a number from 1 to 5.
        </small>
      </div>

      <div class="col-md-12 d-flex justify-content-center pt-3">
        <button type="submit" class="btn btn-primary d-none d-sm-block">OK</button>
        <button type="submit" class="btn btn-primary btn-block d-block d-sm-none">OK</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import InstallmentService from '@/services/InstallmentService';
import store from '@/store';

export default {
  store,
  data() {
    return {
      amount: null,
      times: null,
      errorMessage: null,
      failedRequest: false
    };
  },
  methods: {
    doSplitPayment() {
      if (!this.isAmountFieldValid || !this.isTimesFieldValid) {
        return;
      }
      this.failedRequest = false;
      const amount = parseInt(this.amount, 10);
      const times = parseInt(this.times, 10);

      InstallmentService.getSplittedPayment(amount, times)
        .then(response => response.data)
        .then(data => this.setFinalAmount(data.data))
        .catch((error) => {
          if (error.response) {
            this.errorMessage = error.response.data.error;
            this.failedRequest = true;
          }
        });
    },

    ...mapActions([
      'setFinalAmount'
    ])
  },
  computed: {
    isAmountFieldValid() {
      if (this.amount === null) {
        return true;
      }

      const loan = parseInt(this.amount, 10);
      return loan >= 10000 && loan <= 100000;
    },
    isTimesFieldValid() {
      if (this.times === null) {
        return true;
      }

      const times = parseInt(this.times, 10);
      return times > 0 && times < 6;
    }
  }
};
</script>
