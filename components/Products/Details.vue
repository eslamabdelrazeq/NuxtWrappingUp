<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-12 text-primary">
            {{product.title}} , {{ new Date() | date }}
          </strong>
          <h3 class="mb-0">
            <a class="text-dark" href="#">{{product.description}}</a>
          </h3>
          <div class="mb-1 text-muted">{{product.id}}</div>
          <p class="card-text mb-auto">
            {{product.title}}
          </p>
          <a href="#">{{product.id}}</a>
        </div>
        <img
          class="card-img-right flex-auto d-none d-md-block"
          data-src="holder.js/200x250?theme=thumb"
          alt="Thumbnail [200x250]"
          style="width: 200px; height: 250px;"
          :src="product.image"
          data-holder-rendered="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
}
</script>
