<template>
  <div>
    <keep-alive>
      <component
        ref="currentStep"
        :is="currentStep"
        @update="processStep"
        :wizard-data="form"     
      />
    </keep-alive>
    
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
        :disabled="!canGoNext"
        @click="goNext"
      >Next</button>
    </div>

    <pre><code>{{ form }}</code></pre>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import {
  FormUserDetails,
  FormReviewOrder,
  FormPlanPicker,
  FormAddress,
} from '@/components';
import { FormWizard, ProcessStep, FormGeneral } from './viewModel';

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
      steps: [
        'FormPlanPicker',
        'FormUserDetails',
        'FormAddress',
        'FormReviewOrder',
      ],
      currentStepNumber: 1 as number,
      canGoNext: false as boolean,
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
    length(): number {
      return this.steps.length;
    },
    currentStep(): string {
      return this.steps[this.currentStepNumber - 1];
    },
    progress(): number {
      return (this.currentStepNumber / this.length) * 100;
    },
  },
  methods: {
    processStep(step: ProcessStep): void {
      Object.assign(this.form, step.data);
      this.canGoNext = step.valid;
    },
    goBack(): void {
      this.currentStepNumber -= 1;
      this.canGoNext = true;
    },
    goNext(): void {
      this.currentStepNumber += 1;

      this.$nextTick(() => {
        this.canGoNext = !(this.$refs.currentStep as Vue).$v.$invalid;
      });
    },
  },
});
</script>
