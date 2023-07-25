<template>
  <div class="container pt-1">
    <div class="card">
      <h2>ActualNews {{ now }}</h2>
      <div>Has opened: {{ openRate }}</div>
      <div>Has readed: {{ readRate }}</div>
    </div>

    <TheNews
      v-for="item in news"
      :key="id"
      :title="item.title"
      :id="item.id"
      :isOpen="item.isOpen"
      :isRead="item.wasRead"
      @openNews="openNews"
      @newsReaded="markAsRead"
    />
  </div>
</template>

<script>
import TheNews from "./TheNews.vue";

export default {
  name: "App",
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        { title: "PussyDestroyer-1", id: 100, isOpen: false, wasRead: false },
        { title: "PussyDestroyer-2", id: 200, isOpen: false, wasRead: false },
      ],
      openRate: 0,
      readRate: 0,
    };
  },
  components: { TheNews },
  methods: {
    openNews(data) {
      console.log(data);
      this.openRate++;
    },
    markAsRead(id) {
      console.log(id);
      // this.news = this.news.map()
      const idx = this.news.findIndex((item) => item.id === id);
      this.news[idx].wasRead = true;
      this.readRate++;
    },
  },
};
</script>

<style></style>
