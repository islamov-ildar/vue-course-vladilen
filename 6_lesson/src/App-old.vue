<template>
  <div class="container pt-1">
    <div class="card">
      <h2>ActualNews {{ now }}</h2>
      <div>
        Has opened: <strong>{{ openRate }}</strong>
      </div>
      <div>
        Has readed: <strong>{{ readRate }}</strong>
      </div>
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
      @markUnread="markAsUnread"
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
  provide() {
    return {
      title: "Список всех новостей",
      news: this.news,
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
      const idx = this.news.findIndex((item) => item.id === id);
      this.news[idx].wasRead = true;
      this.readRate++;
    },
    markAsUnread(id) {
      const idx = this.news.findIndex((i) => i.id === id);
      this.news[idx].wasRead = false;
      this.readRate--;
    },
  },
};
</script>

<style></style>
