<template>
  <div class="card">
    <h3>
    {{ data }}
    </h3>
    <button class="btn">Open</button>
  </div>
</template>

<script>
export default {
  name: 'TheNews',
  props: ['data'],
  components: {}
}
</script>

<style>

</style>
