Vue.createApp({
  data() {
    return {
      title: "Я есть Грут",
      myHtml: "<h1>Vue 3 Title</h1>",
      person: {
        firstName: "Ildar",
        lastName: "Islamov",
        age: 32,
      },
      items: [1, 2],
    };
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
  methods: {
    addItem(event) {
      console.log(event.key);
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
    },
  },
}).mount("#app");
