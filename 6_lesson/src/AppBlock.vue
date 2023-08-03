<template>
  <div class="card">
    <slot name="header">No text</slot> <slot name="paragraph"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "AppBlock",
  data() {
    return {};
  },
  components: {},
};
</script>

<style></style>
