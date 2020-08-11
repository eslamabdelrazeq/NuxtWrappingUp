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
  asyncData(context) {
    if (context.payload) {
      return {
        loadedProduct: context.payload.productData,
      }
    }
    let data = context.store.getters.loadedProducts.find(
      (d) => d.id == context.route.params.id
    )
    return {
      loadedProduct: data
    }
  },
  head: {
    title: 'Single page details title',
  },
}
</script>
