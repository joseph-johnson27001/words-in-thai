<template>
  <div class="about-section">
    <div class="about-header">
      <img src="@/assets/thai-flag.png" alt="Thai Flag" class="flag" />
      <h1 v-if="currentLanguage === 'EN'">Work with Translation Experts</h1>
      <h1 v-else>ทำงานกับผู้เชี่ยวชาญด้านการแปล</h1>
    </div>

    <p v-if="currentLanguage === 'EN'" class="intro-text">
      Seeking a reliable team to take care of all your translation needs?
      Looking for a team of professionals to put your words into Thai? Tell your
      story, reach your audience.
    </p>
    <p v-else class="intro-text">
      กำลังมองหาทีมที่น่าเชื่อถือเพื่อดูแลความต้องการในการแปลของคุณทั้งหมดหรือไม่?
      มองหาทีมผู้เชี่ยวชาญที่จะแปลงคำของคุณเป็นภาษาไทย?
      บอกเล่าเรื่องราวของคุณให้เข้าถึงกลุ่มเป้าหมายของคุณ
    </p>

    <p v-if="currentLanguage === 'EN'" class="body-text">
      We strive to localize all content in a way that consumers, end users, and
      readers will truly comprehend. Combining market competitive rates with
      quick and efficient turnaround time, WordsInThai is the trusted partner
      you can rely on for all translation services.
    </p>
    <p v-else class="body-text">
      เรามุ่งมั่นที่จะแปลเนื้อหาทั้งหมดในลักษณะที่ผู้บริโภค ผู้ใช้ปลายทาง
      และผู้อ่านจะเข้าใจได้อย่างแท้จริง
      ด้วยการผสมผสานอัตราค่าบริการที่แข่งขันได้ในตลาดและเวลาการดำเนินการที่รวดเร็ว
      WordsInThai เป็นพันธมิตรที่เชื่อถือได้สำหรับบริการแปลทั้งหมดของคุณ
    </p>

    <h2 v-if="currentLanguage === 'EN'">OUR LINGUISTS</h2>
    <h2 v-else>นักแปลของเรา</h2>

    <p v-if="currentLanguage === 'EN'" class="body-text">
      All of our professional translators have been hand-picked from the best
      talent in the industry and have six years' average experience each. Your
      words are personal, we respect that, so your words stay in human hands
      from beginning to end.
    </p>
    <p v-else class="body-text">
      นักแปลมืออาชีพทุกคนของเราได้รับการคัดเลือกมาอย่างดีจากพรสวรรค์ที่ดีที่สุดในอุตสาหกรรม
      และมีประสบการณ์เฉลี่ยหกปีในแต่ละคน คำพูดของคุณเป็นเรื่องส่วนตัว
      เราเคารพในสิ่งนั้น ดังนั้นคำพูดของคุณจะอยู่ในมือมนุษย์ตั้งแต่ต้นจนจบ
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentLanguage"]), // Map currentLanguage from Vuex
  },
};
</script>

<style scoped>
.about-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.about-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.flag {
  width: 50px;
  height: 50px;
}

.intro-text,
.body-text {
  font-size: 1.1em;
  line-height: 1.6;
  color: #333;
  margin: 20px 0;
}

h2 {
  font-size: 2em;
  margin: 40px 0 20px;
}

@media screen and (max-width: 768px) {
  .about-section {
    padding: 20px 10px;
  }

  h1 {
    font-size: 1.5em;
  }

  .body-text {
    font-size: 1em;
  }
}
</style>
