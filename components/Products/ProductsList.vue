<template>
  <div class="row">
    <Product
      v-for="product of products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :image="product.image"
      :description="product.description"
    />
  </div>
</template>
<script>
import Product from '@/components/Products/Product'
export default {
  name: 'ProductsList',
  components: {
    Product,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  created(){
    console.log(this.products);
  }
}
</script>
