<template>
  <div class="container pt-1">
    <div class="card">
      <async-component />
      <h1>Dynamic and asynchronous components</h1>
      <app-btn ref="myBtn" @action="active = 'one'" :color="oneColor"
        >one</app-btn
      >
      <app-btn @action="active = 'two'" :color="twoColor">two</app-btn>
    </div>
    <!-- <AppTextOne v-if="active === 'one'" />
    <AppTextTwo v-else /> -->
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppBtn from "./AppBtn.vue";
import AppTextOne from "./AppTextOne.vue";
import AppTextTwo from "./AppTextTwo.vue";

export default {
  name: "App",
  data() {
    return {
      active: "one",
    };
  },
  components: { AppBtn, AppTextOne, AppTextTwo },
  mounted() {
    setTimeout(() => {
      this.componentName = "asd";
    }, 1500);

    console.log(this.$refs.myBtn);
    this.$refs.myBtn.btnLog();
  },
  computed: {
    componentName: {
      // return this.active === "one" ? "AppTextOne" : "AppTextTwo";
      // return "app-text-" + this.active;
      get() {
        return "app-text-" + this.active;
      },
      set(value) {
        console.log("set", value);
      },
    },
    oneColor() {
      return this.active === "one" ? "primary" : "";
    },
    twoColor() {
      return this.active === "two" ? "primary" : "";
    },
  },
};
</script>

<style></style>
