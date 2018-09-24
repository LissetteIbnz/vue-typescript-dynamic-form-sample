<template>
  <div 
    id="app" 
    class="container mx-auto py-6">
    <header>
      <div>
        <span id="logo">Liquid Gold Box</span>
      </div>
    </header>

    <div class="content">
      <form-wizard/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FormWizard from '@/components/FormWizard.vue';

export default Vue.extend({
  name: 'App',
  components: {
    FormWizard,
  },
});
</script>
