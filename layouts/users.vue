<template>
  <div>
    <Header />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          <nuxt-link to="/users"> Users Section</nuxt-link>
        </li>
      </ol>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    Header,
  },
}
</script>
