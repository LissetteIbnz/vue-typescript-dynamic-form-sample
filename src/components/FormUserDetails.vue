<template>
  <div>
    <h1 class="title">Create Account</h1>

    <h2 class="subtitle">
      Create an account or log in to order your liquid gold subscription
    </h2>

    <form 
      class="form" 
      @input="submit">
      <div class="form-group">
        <label 
          class="form-label" 
          for="email">Email</label>
        <input 
          id="email" 
          v-model="$v.form.email.$model" 
          type="text" 
          placeholder="your@email.com" 
          class="form-control">
        <div 
          v-if="$v.form.email.$error && !$v.form.email.required" 
          class="error">email is required</div>
        <div 
          v-if="$v.form.email.$error && !$v.form.email.email" 
          class="error">email is invalid</div>
      </div>


      <div class="form-group">
        <label 
          class="form-label" 
          for="password">Password</label>
        <input 
          id="password" 
          v-model="$v.form.password.$model" 
          type="password" 
          placeholder="Super Secret Password" 
          class="form-control">
        <div 
          v-if="$v.form.password.$error && !$v.form.password.required" 
          class="error">password is required</div>
      </div>


      <div class="form-group">
        <label 
          class="form-label" 
          for="name">Name</label>
        <input 
          id="name" 
          v-model="$v.form.name.$model" 
          type="text" 
          placeholder="What should we call you?" 
          class="form-control">
        <div 
          v-if="$v.form.name.$error" 
          class="error">name is required</div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { required, email } from 'vuelidate/lib/validators';
import { FormUserDetails } from './viewModel';

export default Vue.extend({
  name: 'FormUserDetails',
  data() {
    return {
      form: {
        email: null,
        password: null,
        name: null,
      } as FormUserDetails,
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      name: {
        required,
      },
    },
  },
  methods: {
    submit() {
      if (!this.$v.$invalid) {
        this.$emit('update', {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name,
        } as FormUserDetails);
      }      
    },
  },
});
</script>
