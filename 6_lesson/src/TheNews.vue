<template>
  <div class="card">
    <h2>{{ id }}</h2>
    <h3>
      {{ title }}
    </h3>
    <button class="btn" @click="open">
      {{ isNewsOpen ? "Close" : "Open" }}
    </button>
    <div v-if="isNewsOpen">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex,
        repellat perspiciatis porro illo nam hic placeat quibusdam nobis omnis
        soluta perferendis, veritatis, odit voluptate ab maiores at maxime
        atque!
      </p>
      <button v-if="!isRead" class="btn primary" @click="readNews">
        Read news
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNews",
  props: {
    title: {
      type: String,
      required: true,
      validator(value) {
        console.log(value);
        return true;
      },
    },
    id: { type: Number, required: false },
    isOpen: {
      type: Boolean,
      required: false,
      default: true,
    },
    isRead: {
      type: Boolean,
      required: true,
    },
  },
  components: {},
  emits: {
    openNews(num) {
      if (num) {
        return true;
      }
      console.warn("No data in openNews");
      return false;
    },
    newsReaded: null,
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
      isNewsRead: this.isRead,
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) this.$emit("openNews", 42);
    },
    readNews() {
      this.isNewsOpen = false;
      if (!this.isRead) {
        this.$emit("newsReaded", this.id);
        // this.isNewsRead = true;
      }
    },
  },
};
</script>

<style></style>
