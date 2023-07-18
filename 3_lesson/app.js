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
      items: [1, 2, "d", 4, 5, 6],
    };
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
  methods: {
    addItem(event) {
      console.log(this.$refs.myInput.value);
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
      console.log(this.items);
    },
    remove(i) {
      this.items.splice(i, 1);
    },
    log(item) {
      console.log(item);
    },
  },
}).mount("#app");
