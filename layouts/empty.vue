<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  created() {
    // if (process.client) {
    //   console.log('Checking localStorage for token')
    //   let token = localStorage.getItem('token')
    //   if (token != null && token != "null") {
    //     this.$store.dispatch('setToken', token);
    //     //this.$router.push('/products');
    //   }
    // }
  },
}
</script>
