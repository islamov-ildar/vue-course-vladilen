<template>
  <div class="container pt-1">
    <div class="card">
      <h1>Slots</h1>
      <AppBlock>
        <template v-slot:header>
          <h1>Hight header</h1>
        </template>
        <template #paragraph>
          <p>Wery important info</p>
        </template>
        <template v-slot:footer>
          <hr />
          <small>Footer</small>
        </template>
      </AppBlock>
    </div>
    <AppList>
      <template #default="{ iter, i }">
        <span style="color: rebeccapurple"> Item: {{ iter }} = {{ i }}</span>
      </template>
    </AppList>
  </div>
</template>

<script>
import AppBlock from "./AppBlock.vue";
import AppList from "./AppList.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: { AppBlock, AppList },
};
</script>

<style></style>
