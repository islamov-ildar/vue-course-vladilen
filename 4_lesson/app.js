const h = Vue.h;

const app = Vue.createApp({
  data() {
    return {
      title: "Title from data",
    };
  },
  methods: {
    changeTitle() {
      console.log(this);
      this.title = "newTitle-2";
    },
  },
  //   template: `
  //         <div class="card center">
  //             <h1>Vue 3</h1>
  //             <h2>{{title}}</h2>
  //             <button class="btn" @click="title = 'New Title'">change</button>
  //         </div>
  //     `,
  render() {
    return h(
      "div",
      {
        class: "card center",
      },
      [
        h("h1", {}, this.title),
        h("button", { class: "btn", onclick: this.changeTitle }, "change-1"),
      ]
    );
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("create");
  },
});

app.mount("#app");
