<template>
  <input
      class="input__text"
      :type="type"
      :name="name"
      v-model="inputValue"
      :placeholder="placeholder"
  >
</template>

<script>
export default {
  name: "AppInputFile",
  props: {
    name: {
      type: String,
      default: "file"
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: "",
      default: ""
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input__text {
  display: block;
  height: 30px;
  width: 100%;
  padding: 0 8px;
  text-align: left;
  color: $main-font-color;
  background-color: $main-background-color;
  @include border-radius-box()
}
</style>