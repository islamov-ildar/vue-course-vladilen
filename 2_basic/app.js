const App = {
  data() {
    return {
      counter: 0,
      placeholderString: "Введите название заметки",
      title: "Список заметок",
      inputValue: "123",
      notes: ["Note1", "Notes", "Notes3"],
    };
  },
  methods: {
    // inputChangeHandler(event) {
    //   console.log("inputChangeHandler", event.target.value);
    //   this.inputValue = event.target.value;
    // },
    addNewNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    // inputKeyPress(event) {
    //   console.log(event.key);
    //   if (event.key === "Enter") {
    //     this.addNewNote();
    //   }
    // },
    removeNote(idx, event) {
      this.notes.splice(idx, 1);
      console.log(idx);
      console.log(event);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
  },
  computed: {
    doubleCountCmpt() {
      console.log("doubleCountCmpt");
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      console.log(value);
      if (value.length > 10) {
        this.inputValue = "";
      }
    },
  },
};

// const app = Vue.createApp(App);

// app.mount("#app");

Vue.createApp(App).mount("#app");
