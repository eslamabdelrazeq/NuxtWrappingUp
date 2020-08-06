<template>
  <div>
    <ProductForm :product="loadedProduct" @submit="submit" @cancel="cancel" />
  </div>
</template>

<script>
import ProductForm from '@/components/Products/ProductForm'
import axios from 'axios'

export default {
  components: {
    ProductForm,
  },
  data() {
    return {}
  },
  computed: {
    loadedProduct() {
      return this.$store.getters.loadedProducts.find(
        (d) => d.id == this.$route.params.id
      )
    },
  },
  methods: {
    submit(data) {
      this.$store
        .dispatch('editProduct', data)
        .then(() => this.$toast.success('Successfully saved').goAway(1500))
    },
    cancel() {},
  },
}
</script>
