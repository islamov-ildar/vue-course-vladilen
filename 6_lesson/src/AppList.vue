<template>
  <div class="card">
    <ul>
      <li v-for="(item, idx) in 5">
        <slot :iter="item" :i="idx"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppList",
  data() {
    return {};
  },
  components: {},
};
</script>

<style></style>
