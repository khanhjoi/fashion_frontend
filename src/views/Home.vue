<template>
    <div class="container">
        <slideComponent />

        <Store />
        
        <ContactComponent/>
    </div>
</template>
<script>
  //export components
  import slideComponent from '../components/mainPages/sliderCpn.vue';
  import Store from '../components/mainPages/StoreCpn.vue';
  import ContactComponent from '../components/mainPages/ContactCpn.vue'
  
  export default {
    components: {
      slideComponent,
      Store,
      ContactComponent,
    }
  }
</script>
<style >
   
</style>