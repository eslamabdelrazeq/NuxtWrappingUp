<template>
  <div class="row">
    <ProductsList :products="loadedProducts" />
  </div>
</template>

<script>
import ProductsList from '@/components/Products/ProductsList'

export default {
  components: {
    ProductsList,
  },
  middleware: ['auth'],

  // asyncData(context,callBack)
  // fetch(context) {
  //   console.log('executed on server only before HTML render')
  //   return new Promise((resolve, reject) => {
  //     setTimeout(function () {
  //       resolve({
  //         products: [
  //           {
  //             id: 1,
  //             title: 'Title text 2',
  //             image: 'https://i.ytimg.com/vi/aeQnQ-vjtuY/maxresdefault.jpg',
  //             description: 'dddddddd ddddddddddddddd',
  //           },
  //           {
  //             id: 2,
  //             title: 'Title text 2',
  //             image:
  //               'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/120309-phones-buyer-s-guide-best-smartphones-2020-the-top-mobile-phones-available-to-buy-today-image1-eagx1ykift.jpg',
  //             description: 'vvvv vvvvvvvvvvvv',
  //           },
  //           {
  //             id: 3,
  //             title: 'Title text 3',
  //             image: 'https://i.ytimg.com/vi/aeQnQ-vjtuY/maxresdefault.jpg',
  //             description: 'xxxxxxx xxxx',
  //           },
  //         ],
  //       })
  //     }, 2000)
  //   })
  //     .then((data) => context.store.commit('setProducts', data))
  //     .catch((error) => context.error(new Error(error)))
  // },

  data() {
    return {}
  },
  methods: {},
  created() {
    //this.$store.dispatch('setProducts', this.products)
  },
  computed: {
    loadedProducts() {
      return this.$store.getters.loadedProducts
    },
  },
}
</script>
