<template>
  <div>
    <h1 class="title">Delivery details</h1>

    <h2 class="subtitle">
      Where should we send your freshly roasted coffee beans?
    </h2>

    <form @input="submit" class="form">
      <div class="form-group">
        <label
          class="form-label"
          for="delivery_name">Name</label>
        <input
          id="delivery_name"
          v-model="$v.form.recipient.$model"
          type="text"
          placeholder="Recipients Name"
          class="form-control">
        <div
          v-if="$v.form.recipient.$error"
          class="error">field is required</div>
      </div>

      <div class="form-group">
        <label
          class="form-label" 
          for="address">Address</label>
        <textarea
          id="address"
          v-model="$v.form.address.$model"
          placeholder="London Street 470978 New England"
          rows="3"
          class="form-control"
        />
        <div 
          v-if="$v.form.address.$error"
          class="error">field is required</div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { required } from 'vuelidate/lib/validators';
import { FormAddress, FormWizard, ProcessStep } from './viewModel';

export default Vue.extend({
  name: 'FormAddress',
  props: {
    wizardData: {
      type: Object as () => FormWizard,
      required: true,
    },
  },
  data() {
    return {
      form: {
        address: null,
        recipient: this.wizardData.name,
      } as FormAddress,
    };
  },
  validations: {
    form: {
      address: {
        required,
      },
      recipient: {
        required,
      },
    },
  },
  methods: {
    submit(): void {
      this.$emit('update', {
        data: {
          address: this.form.address,
          recipient: this.form.recipient,
        },
        valid: !this.$v.$invalid,
      } as ProcessStep);
    },
  },
});
</script>
