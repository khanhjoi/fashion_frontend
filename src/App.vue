<template>
  <HeaderCpn/>
  
  <RouterView />
  
  <FooterCpn />
</template>

<script>

import HeaderCpn from "./components/header&footer/HeaderCpn.vue";
import FooterCpn from "./components/header&footer/footerCpn.vue"
 
export default {
  components:{
    HeaderCpn,
    FooterCpn
  }
}
</script>

<style >
  
</style>