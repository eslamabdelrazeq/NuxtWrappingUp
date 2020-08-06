<template>
  <Details :product="loadedProduct" />
</template>
<script>
import Details from '@/components/Products/Details'
export default {
  components: {
    Details,
  },
  validate(data) {
    // return /^\d+$/.test(data.params.id)
    return true
  },
  computed: {
    loadedProduct() {
      return this.$store.getters.loadedProducts.find(
        (d) => d.id == this.$route.params.id
      )
    },
  },
  head: {
    title: "Single page details title"
  }
}
</script>
