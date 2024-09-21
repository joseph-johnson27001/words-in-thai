<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div>
        <h2 v-if="currentLanguage == 'EN'">About Us</h2>
        <h2 v-else>เกี่ยวกับเรา</h2>
      </div>
      <div class="nav-links-container">
        <ul class="nav-links">
          <!-- Iterate over the navItems and display them dynamically -->
          <li v-for="(item, index) in navItems" :key="index">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
        <button class="lang-btn" @click="toggleLang">
          {{ currentLanguage }}
        </button>
      </div>
    </nav>
  </div>
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
.navbar-container {
  width: 100vw;
  background-color: #24315d;
  color: white;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid white;
}

.navbar {
  max-width: 1000px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  padding: 5px;
}

.nav-links-container {
  display: flex;
  gap: 20px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  text-decoration: none;
  /* font-size: 1.2em; */
  color: white;
}

.lang-btn {
  padding: 10px 20px;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #24315d;
  cursor: pointer;
}
</style>
