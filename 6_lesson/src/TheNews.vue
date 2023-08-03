<template>
  <div class="card">
    <h2>{{ id }}</h2>
    <h3>
      {{ title }}
    </h3>
    <AppBtn @action="open"> {{ isNewsOpen ? "Close" : "Open" }}</AppBtn>
    <AppBtn v-if="isRead" color="danger" @action="markUnread"
      >Mark us unread</AppBtn
    >
    <div v-if="isNewsOpen">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex,
        repellat perspiciatis porro illo nam hic placeat quibusdam nobis omnis
        soluta perferendis, veritatis, odit voluptate ab maiores at maxime
        atque!
      </p>
      <AppBtn v-if="!isRead" @action="readNews">Read news</AppBtn>
      <AppNewsList></AppNewsList>
    </div>
  </div>
</template>

<script>
import AppBtn from "./AppBtn.vue";
import AppNewsList from "./AppNewsList.vue";

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
  components: { AppBtn, AppNewsList },
  emits: {
    openNews(num) {
      if (num) {
        return true;
      }
      console.warn("No data in openNews");
      return false;
    },
    newsReaded(id) {
      if (!id) {
        console.error("Id was missing");
        return false;
      }
      return true;
    },
    markUnread: null,
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
    markUnread() {
      console.log(123);
      if (this.isRead) {
        this.$emit("markUnread", this.id);
      }
    },
  },
};
</script>

<style></style>
