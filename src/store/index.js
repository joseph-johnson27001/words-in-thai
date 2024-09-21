import { createStore } from "vuex";

export default createStore({
  state: {
    selectedLanguage: "EN", // Default to English
    navigation: {
      EN: [
        "Home",
        "About Us",
        "Services",
        "Rates",
        "Blog",
        "Work With Us",
        "Contact",
      ],
      TH: [
        "หน้าหลัก",
        "เกี่ยวกับเรา",
        "บริการ",
        "ราคา",
        "บล็อก",
        "ร่วมงานกับเรา",
        "ติดต่อ",
      ],
    },
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      state.selectedLanguage = language;
    },
  },
  actions: {
    changeLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
  },
  getters: {
    currentLanguage: (state) => state.selectedLanguage,
    navItems: (state) => state.navigation[state.selectedLanguage],
  },
});
