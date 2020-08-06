<template>
  <div>
    <ProductForm @submit="submit" @cancel="cancel" />
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
    return {
      newProduct: {
        id: 0,
        title: '',
        description: '',
        image: '',
      },
    }
  },
  methods: {
    submit(data) {
      this.$store
        .dispatch('addProduct', data)
        .then(() => this.$toast.success('Successfully saved').goAway(1500))
    },
    cancel() {},
  },
}
</script>
