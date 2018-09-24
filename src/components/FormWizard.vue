<template>
  <div>
    <form-plan-picker v-if="currentStepNumber === 1" @update="processStep"/>
    <form-user-details v-if="currentStepNumber === 2" @update="processStep"/>
    <form-address v-if="currentStepNumber === 3"/>
    <form-review-order v-if="currentStepNumber === 4"/>

    <div class="progress-bar">
      <div :style="`width: ${progress}%;`"></div>
    </div>

    <!-- Actions -->
    <div class="buttons">
      <button
        @click="goBack"
        v-if="currentStepNumber > 1"
        class="btn-outlined"
      >Back
      </button>
      <button
        @click="goNext"
        class="btn"
      >Next</button>
    </div>

    <pre><code>{{form}}</code></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FormData } from '@/models';
import FormPlanPicker from './FormPlanPicker.vue';
import FormUserDetails from './FormUserDetails.vue';
import FormAddress from './FormAddress.vue';
import FormReviewOrder from './FormReviewOrder.vue';

export default Vue.extend({
  name: 'FormWizard',
  components: {
    FormPlanPicker,
    FormUserDetails,
    FormAddress,
    FormReviewOrder,
  },
  data() {
    return {
      currentStepNumber: 1 as number,
      length: 4 as number,
      form: {
        plan: null,
        email: null,
        name: null,
        password: null,
        address: null,
        recipient: null,
        chocolate: false,
        otherTreat: false,
      } as FormData,
    };
  },
  computed: {
    progress(): number {
      return this.currentStepNumber / this.length * 100;
    },
  },
  methods: {
    processStep(stepData: FormData): void {
      Object.assign(this.form, stepData);
    },
    goBack(): void {
      this.currentStepNumber--;
    },
    goNext(): void {
      this.currentStepNumber++;
    },
  },
});
</script>
