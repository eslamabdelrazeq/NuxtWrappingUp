<template>
  <div>
    <div class="row">
      <h1>Products Section</h1>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  middleware: 'log',
  components: {},
  data() {
    return {}
  },
  methods: {},
  layout: 'default',
}
</script>
