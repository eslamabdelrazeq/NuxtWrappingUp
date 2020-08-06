<template>
  <div class="row">
    <div class="col-md-12" style="text-align: left;">
      <h1>Manage Product</h1>
      <form id="productForm" v-on:submit.prevent>
        <div class="row">
          <div class="col-md-12">
            <AppControlInput
              control-type="input"
              place-holder="Product Title"
              v-model="editedProduct.title"
            >
              Title
            </AppControlInput>
          </div>
          <div class="col-md-12">
            <AppControlInput
              control-type="textarea"
              place-holder="Product Description"
              v-model="editedProduct.description"
            >
              Description
            </AppControlInput>
          </div>
          <div class="col-md-12">
            <AppControlInput
              control-type="input"
              place-holder="Product Image URL"
              v-model="editedProduct.image"
            />
          </div>
          <div class="col-md-12">
            <fieldset>
              <br />
              <AppButton btn-style="button" @click="fromSubmit">
                Save
              </AppButton>
              <AppButton btn-style="cancel" @click="fromCancel">
                Cancel
              </AppButton>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>


export default {
  name: 'ProductForm',
  props: {
    product: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedProduct: this.product
        ? { ...this.product }
        : {
            id: '',
            title: '',
            description: '',
            image: '',
          },
    }
  },
  methods: {
    fromSubmit() {
      this.$emit('submit', this.editedProduct)
    },
    fromCancel() {
      this.$emit('cancel', this.editedProduct)
    },
  },
}
</script>
