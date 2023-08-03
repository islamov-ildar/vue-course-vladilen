<template>
  <hr />
  <ul>
    <li v-for="item in news">
      {{ item.title }}<span v-if="item.wasRead"> !!! </span>
    </li>
  </ul>
  <h5>{{ title }}</h5>
</template>

<script>
export default {
  name: "AppNewsList",
  emits: [],
  data() {
    return {};
  },
  components: {},
  methods: {},
  inject: ["title", "news"],
};
</script>

<style></style>
