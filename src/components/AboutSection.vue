<template>
  <div>
    <div class="banner">
      <div class="banner-text">
        <h1 v-if="currentLanguage === 'EN'">Welcome to Words In Thai</h1>
        <h1 v-else>ยินดีต้อนรับสู่ ภาษาไทย</h1>
        <p v-if="currentLanguage === 'EN'">
          Your trusted partner for professional translation services.
        </p>
        <p v-else>พันธมิตรที่คุณไว้วางใจสำหรับบริการแปลมืออาชีพ</p>
      </div>
    </div>

    <div class="about-section">
      <img src="@/assets/thai-flag.png" alt="Thai Flag" class="flag" />
      <div class="about-header">
        <h1 v-if="currentLanguage === 'EN'">Work with Translation Experts</h1>
        <h1 v-else>ทำงานกับผู้เชี่ยวชาญด้านการแปล</h1>
      </div>

      <p v-if="currentLanguage === 'EN'" class="intro-text">
        Seeking a reliable team to take care of all your translation needs?
        Looking for a team of professionals to put your words into Thai? Tell
        your story, reach your audience.
      </p>
      <p v-else class="intro-text">
        กำลังมองหาทีมที่น่าเชื่อถือเพื่อดูแลความต้องการในการแปลของคุณทั้งหมดหรือไม่?
        มองหาทีมผู้เชี่ยวชาญที่จะแปลงคำของคุณเป็นภาษาไทย?
        บอกเล่าเรื่องราวของคุณให้เข้าถึงกลุ่มเป้าหมายของคุณ
      </p>

      <p v-if="currentLanguage === 'EN'" class="body-text">
        We strive to localize all content in a way that consumers, end users,
        and readers will truly comprehend. Combining market competitive rates
        with quick and efficient turnaround time, WordsInThai is the trusted
        partner you can rely on for all translation services.
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

      <p v-if="currentLanguage === 'EN'" class="body-text">
        We offer a range of services, including document translation, video
        translation, website localization, and e-learning translation. Our
        mission is to help you reach your global audience with ease.
      </p>
      <p v-else class="body-text">
        เราให้บริการที่หลากหลาย รวมถึงการแปลเอกสาร การแปลวิดีโอ
        การปรับแต่งเว็บไซต์ และการแปลการเรียนรู้ทางอิเล็กทรอนิกส์
        ภารกิจของเราคือการช่วยคุณเข้าถึงผู้ชมทั่วโลกได้อย่างง่ายดาย
      </p>

      <div class="team-section">
        <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <img :src="member.image" :alt="member.name" class="team-image" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.title }}</p>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <h2 v-if="currentLanguage === 'EN'">MISSION</h2>
          <h2 v-else>ภารกิจ</h2>
          <p v-if="currentLanguage === 'EN'">
            Our mission is to provide high-quality translations that resonate
            with your audience.
          </p>
          <p v-else>
            ภารกิจของเราคือการให้บริการการแปลคุณภาพสูงที่เข้ากับกลุ่มเป้าหมายของคุณ
          </p>
        </div>
        <div class="column">
          <h2 v-if="currentLanguage === 'EN'">VALUES</h2>
          <h2 v-else>ค่านิยม</h2>
          <p v-if="currentLanguage === 'EN'">
            Our values are integrity, professionalism, and dedication.
          </p>
          <p v-else>
            ค่านิยมของเราคือ ความซื่อสัตย์ ความเป็นมืออาชีพ และความมุ่งมั่น
          </p>
        </div>
        <div class="column">
          <h2 v-if="currentLanguage === 'EN'">TEAM</h2>
          <h2 v-else>ทีมงาน</h2>
          <p v-if="currentLanguage === 'EN'">
            Our team is composed of experienced professionals from diverse
            backgrounds.
          </p>
          <p v-else>ทีมงานของเราประกอบด้วยมืออาชีพที่มีประสบการณ์จากหลายสาขา</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentLanguage"]), // Map currentLanguage from Vuex
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "John Doe",
          title: "Translator",
          image: "john-doe.JPG",
        },
        {
          id: 2,
          name: "Jane Smith",
          title: "Editor",
          image: "/jane-smith.JPG",
        },
        // Add more team members as needed
      ],
    };
  },
};
</script>

<style scoped>
.about-section {
  max-width: 1000px;
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

.team-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
}

.team-member {
  width: 200px;
  text-align: center;
}

.team-image {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.columns {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}

.column {
  width: 30%;
}

.banner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: linear-gradient(
    to bottom right,
    #a2c2e8,
    /* Light blue */ #33adff /* Deeper blue */
  ); /* Blue gradient */
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.banner-text h1 {
  font-size: 3em;
  margin: 0;
}

.banner-text p {
  font-size: 1.5em;
  margin-top: 10px;
}

.flag {
  position: absolute;
  background-color: #f4f4f4;
  top: 410px;
  left: 45%;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 5px solid #f4f4f4;
  z-index: 1;
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

  .columns {
    flex-direction: column;
    align-items: center;
  }

  .column {
    width: 80%;
    margin-bottom: 20px;
  }

  .banner-text h1 {
    font-size: 2em;
  }

  .banner-text p {
    font-size: 1.2em;
  }

  .flag {
    width: 80px; /* Adjust for smaller screens */
    height: 80px; /* Adjust for smaller screens */
  }
}
</style>
