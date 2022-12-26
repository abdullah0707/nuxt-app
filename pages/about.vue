<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dignissimos deleniti excepturi repudiandae necessitatibus praesentium quas voluptatum illo id. Officia alias iure molestias, reiciendis ullam omnis eius quam ipsum quia!</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/USD')
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
