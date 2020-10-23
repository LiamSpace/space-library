<template>
  <label for="" v-if="$slots.default" class="[ sp-radio, ]">
    <span class="sp-radio-input">
      <span class="sp-radio-inner"></span>
      <input
        type="radio"
        :name="name"
        :id="`sp-radio-${label}`"
        class="sp-radio-origin"
      />
    </span>
    <label :for="`sp-radio-${label}`" class="sp-radio-label">
      <slot></slot>
    </label>
  </label>
</template>

<script>
export default {
  name: "sp-radio",
  props: {
    name: {
      type: String,
      value: "",
    },
    label: {
      type: String,
      value: "",
    },
  },
  computed: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
