<template>
  <div id="app">
    <HeaderNav />
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from "./views/AboutUs.vue";
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  components: {
    AboutUs,
    HeaderNav,
  },
};
</script>

<style>
/* General global styles */
body {
  font-family: "Noto Sans Thai", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;

  display: flex;
  justify-content: center;
}

h1,
h2 {
  font-family: "Raleway", sans-serif;
}

#app {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
