<template>
  <div class="top-bar">
    <div class="top-bar-info-container">
      <div class="phone-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.5 21 3 13.5 3 4.5 3 3.95 3.45 3.5 4 3.5H7.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z"
          />
        </svg>
      </div>
      <div class="email-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
          />
        </svg>
      </div>
    </div>
  </div>
  <div class="navbar-container">
    <nav class="navbar">
      <div>
        <img
          src="/words-in-thai-logo.png"
          alt="logo Image"
          class="logo-image"
        />
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
.top-bar {
  width: 100vw;
  color: white;
  display: flex;
  justify-content: flex-end;
  background-color: #24315d;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-bar-info-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0px 42px;
  color: white;
  font-size: 0.8rem;
  align-items: center;
}

.phone-icon,
.email-icon {
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.navbar-container {
  width: 100vw;
  background-color: white;
  color: white;
  display: flex;
  justify-content: center;
}

.navbar {
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  padding: 5px;
  color: #24315d;
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
  color: #24315d;
  margin: 4px 0;
  transition: 0.3s;
}

.logo-image {
  height: 35px;
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
  color: #24315d;
}

.lang-btn {
  padding: 10px 20px;
  color: white;
  border: 1px solid #24315d;
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
