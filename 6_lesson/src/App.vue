<template>
  <div class="container pt-1">
    <TheNews v-for="oneNews in news" :key="news" :data="oneNews"/>
  </div>
</template>

<script>
import TheNews from './TheNews.vue';

export default {
  name: 'App',
  data() {
    return {
      news: [
        'qwe',
        '12313',
      ]
    }
  },
  components: {TheNews}
}
</script>

<style>

</style>
