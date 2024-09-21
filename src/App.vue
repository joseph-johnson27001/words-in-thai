<template>
  <div id="app">
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from "./views/AboutUs.vue";

export default {
  components: {
    AboutUs,
  },
};
</script>

<style>
/* General global styles */
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
