<template>
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img
        class="card-img-top"
        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        :alt="title"
        :src="image"
        data-holder-rendered="true"
        style="height: 225px; width: 100%; display: block;"
      />
      <div class="card-body">
        <p class="card-text">
          {{ title }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <nuxt-link :to="'/products/' + id">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
            </nuxt-link>
            <button
              type="button"
              @click="editProduct"
              class="btn btn-sm btn-outline-secondary"
            >
              Edit
            </button>
          </div>
          <small class="text-muted">{{ description }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  methods: {
    editProduct() {
      this.$router.push('/products/' + this.id + '/edit');
    },
  },
}
</script>
