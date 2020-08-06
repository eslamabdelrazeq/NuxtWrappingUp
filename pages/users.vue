<template>
  <div>
    <h1>Users component</h1>
    <input v-model="userId" />
    <button @click="onLoadUser"> Load User</button>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: '',
    }
  },
  methods: {
      onLoadUser(){
          this.$router.push('/users/' + this.userId)
      }
  },
  layout :'users'
}
</script>
