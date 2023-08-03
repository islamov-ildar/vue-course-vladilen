import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import "./theme.css";

createApp(App)
  .component(
    "async-component",
    defineAsyncComponent(() => import("./AppAsyncComponent.vue"))
  )
  .mount("#app");
