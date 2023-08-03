<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppBtn",
  props: {
    color: {
      type: String,
      default: "",
      validator(val) {
        return ["", "primary", "danger"].includes(val);
      },
    },
  },
  emits: ["action"],
  data() {
    return {};
  },
  components: {},
  methods: {
    btnLog() {
      console.log("btnLog");
    },
  },
};
</script>

<style></style>
