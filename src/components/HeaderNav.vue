<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div>
        <h2 v-if="currentLanguage == 'EN'">Words In Thai</h2>
        <h2 v-else>ภาษาไทย</h2>
      </div>
      <div class="nav-links-container">
        <div class="hamburger" @click="toggleMenu">
          <div :class="{ active: isMenuOpen }"></div>
          <div :class="{ active: isMenuOpen }"></div>
          <div :class="{ active: isMenuOpen }"></div>
        </div>
        <ul class="nav-links" :class="{ open: isMenuOpen }">
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
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    ...mapGetters(["currentLanguage", "navItems"]),
  },
  methods: {
    ...mapActions(["changeLanguage"]),
    toggleLang() {
      const newLang = this.currentLanguage === "EN" ? "TH" : "EN";
      this.changeLanguage(newLang);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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
  align-items: center;
  gap: 20px;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  transition: 0.3s;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  transition: max-height 0.3s ease;
  overflow: hidden;
}

.nav-links.open {
  max-height: 500px; /* Adjust as needed */
}

.nav-links li a {
  text-decoration: none;
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

@media (max-width: 768px) {
  .nav-links {
    display: none; /* Hide links by default */
    flex-direction: column;
    width: 100%; /* Full width */
  }

  .nav-links.open {
    display: flex; /* Show links when menu is open */
  }

  .hamburger {
    display: flex; /* Show hamburger on smaller screens */
  }
}
</style>
