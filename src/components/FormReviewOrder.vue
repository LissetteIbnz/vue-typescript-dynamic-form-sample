<template>
  <div>
    <h1 class="title">Confirm your order</h1>

    <h2 class="subtitle">
      We're almost there!
    </h2>

    <div class="summary">
      <h3>Subscription</h3>

      <p class="description">
        We'll send you carefully selected coffee every month.
      </p>

      <div class="plans">
        <div class="plan active-plan">
          <div class="weight">
            PLAN WEIGHT
          </div>

          <div class="description">
            <span class="title">
              PLAN NAME
            </span>
            <span class="description">
              PLAN DESC
            </span>
          </div>

          <div class="price">
            <span class="dollar-sign">$</span>
            <span class="number">{{ totalPrice }}</span>
          </div>
        </div>
      </div>

      <h3>
        Level up your box
      </h3>

      <p class="description">
        Treat yourself by leveling up your monthly box
      </p>

      <div class="options">
        <div class="option">
          <input 
            id="chocolate" 
            v-model="form.chocolate" 
            type="checkbox" 
            value="chocolate">
          <label for="chocolate">4 pcs. Single Origin Chocolate (+$4/month)</label>
        </div>

        <div class="option">
          <input 
            id="other_treat" 
            v-model="form.otherTreat" 
            type="checkbox" 
            value="chocolate">
          <label for="other_treat">Another delicious treat (+$2/month)</label>
        </div>
      </div>

      <div class="address">
        <div class="w-2/3">
          <h3>Delivery</h3>
          <p class="description">
            Your first Liquid Gold Box is right around the corner
          </p>
        </div>

        <div class="w-1/3">
          <h3>RECIPIENT</h3>
          <p class="leading-normal">
            ADDRESS
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { formReviewOrder } from './viewModel';

export default Vue.extend({
  name: 'FormReviewOrder',
  data() {
    return {
      form: {
        chocolate: false,
        otherTreat: false,
      } as formReviewOrder,
    };
  },
  computed: {
    totalPrice(): number {
      return 0;
    },
  },
});
</script>
