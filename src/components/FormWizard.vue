<template>
  <div>
    <FormPlanPicker v-if="currentStepNumber === 1"/>
    <FormUserDetails v-if="currentStepNumber === 2"/>
    <FormAddress v-if="currentStepNumber === 3"/>
    <FormReviewOrder v-if="currentStepNumber === 4"/>

    <div class="progress-bar">
      <div :style="`width: ${progress}%;`"/>
    </div>

    <!-- Actions -->
    <div class="buttons">
      <button
        v-if="currentStepNumber > 1"
        class="btn-outlined"
        @click="goBack"
      >Back
      </button>
      <button
        class="btn"
        @click="goNext"
      >Next</button>
    </div>

    <pre><code>{{ form }}</code></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FormUserDetails, FormReviewOrder, FormPlanPicker, FormAddress } from '@/components';
import { FormWizard } from './viewModel';

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
      } as FormWizard,
    };
  },
  computed: {
    progress(): number {
      return this.currentStepNumber / this.length * 100;
    },
  },
  methods: {
    goBack(): void {
      this.currentStepNumber -= 1;
    },
    goNext(): void {
      this.currentStepNumber += 1;
    },
  },
});
</script>
