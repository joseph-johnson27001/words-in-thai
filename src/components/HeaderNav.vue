<template>
  <nav class="navbar">
    <ul class="nav-links">
      <!-- Iterate over the navItems and display them dynamically -->
      <li v-for="(item, index) in navItems" :key="index">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
    <button class="lang-btn" @click="toggleLang">{{ currentLanguage }}</button>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentLanguage", "navItems"]),
  },
  methods: {
    ...mapActions(["changeLanguage"]),
    toggleLang() {
      const newLang = this.currentLanguage === "EN" ? "TH" : "EN";
      this.changeLanguage(newLang);
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  text-decoration: none;
  font-size: 1.2em;
  color: #333;
}

.lang-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.lang-btn:hover {
  background-color: #0056b3;
}
</style>
