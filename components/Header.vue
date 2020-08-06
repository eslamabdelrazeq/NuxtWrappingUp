<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"
  >
    <h5 class="my-0 mr-md-auto font-weight-normal">
      Nuxt Demonstration Example
    </h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <nuxt-link class="p-2" to="/">Home</nuxt-link>
      <nuxt-link class="p-2" to="/products">Products</nuxt-link>
      <nuxt-link class="p-2" to="/products/add">Add Product</nuxt-link>
      <a class="p-2" href="#">Support</a>
      <a class="p-2" href="#">Pricing</a>
    </nav>
    <a class="btn btn-outline-primary" href="#">Sign up</a>
  </div>
</template>
<style scoped>
.nuxt-link-exact-active {
  color: red;
  font-weight: bold;
}
</style>
