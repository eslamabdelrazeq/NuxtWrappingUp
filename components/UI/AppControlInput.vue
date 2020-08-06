<template>
  <div>
    <fieldset>
      <label><slot /></label>
      <input
        v-if="isInput"
        v-bind="$attrs"
        :value="value"
        :placeholder="placeHolder"
        class="form-control"
        @input="$emit('input', $event.target.value)"
      />
      <textarea
        v-if="isTextArea"
        rows="10"
        :value="value"
        class="form-control"
        @input="$emit('input', $event.target.value)"
      ></textarea>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'AppControlInput',
  props: {
    controlType: {
      type: String,
      default: 'input',
    },
    value: {
      type: String,
      default: '',
    },
    placeHolder: {
      type: String,
      default: '',
    },
  },
  methods: {},
  computed: {
    isInput() {
      return this.controlType == 'input'
    },
    isTextArea() {
      return this.controlType == 'textarea'
    },
  },
}
</script>
