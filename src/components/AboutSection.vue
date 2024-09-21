<template>
  <div>
    <div class="banner">
      <img src="/thailand.jpg" alt="Banner Image" class="banner-image" />
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
      <div class="about-header">
        <h1 v-if="currentLanguage === 'EN'">Work with Translation Experts</h1>
        <h1 v-else>ทำงานกับผู้เชี่ยวชาญด้านการแปล</h1>
      </div>

      <div class="intro">
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
      </div>

      <div class="columns">
        <div class="column">
          <h2 v-if="currentLanguage === 'EN'">OUR LINGUISTS</h2>
          <h2 v-else>นักแปลของเรา</h2>
          <p v-if="currentLanguage === 'EN'" class="body-text">
            All of our professional translators have been hand-picked from the
            best talent in the industry and have six years' average experience
            each. Your words are personal, we respect that, so your words stay
            in human hands from beginning to end.
          </p>
          <p v-else class="body-text">
            นักแปลมืออาชีพทุกคนของเราได้รับการคัดเลือกมาอย่างดีจากพรสวรรค์ที่ดีที่สุดในอุตสาหกรรม
            และมีประสบการณ์เฉลี่ยหกปีในแต่ละคน คำพูดของคุณเป็นเรื่องส่วนตัว
            เราเคารพในสิ่งนั้น ดังนั้นคำพูดของคุณจะอยู่ในมือมนุษย์ตั้งแต่ต้นจนจบ
          </p>
        </div>
        <div class="column">
          <h2 v-if="currentLanguage === 'EN'">SERVICES</h2>
          <h2 v-else>บริการ</h2>
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
        </div>
        <div class="column">
          <h2 v-if="currentLanguage === 'EN'">TEAM</h2>
          <h2 v-else>ทีมงาน</h2>
          <p v-if="currentLanguage === 'EN'" class="body-text">
            Our team is composed of experienced professionals from diverse
            backgrounds, ensuring a wide range of expertise for your projects.
          </p>
          <p v-else class="body-text">
            ทีมงานของเราประกอบด้วยมืออาชีพที่มีประสบการณ์จากหลายสาขา
            ซึ่งมั่นใจได้ว่ามีความเชี่ยวชาญหลากหลายสำหรับโครงการของคุณ
          </p>
        </div>
      </div>

      <div class="team-section">
        <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <img :src="member.image" :alt="member.name" class="team-image" />
          <h3>{{ member.name }}</h3>
          <p>{{ currentLanguage === "EN" ? member.title : member.titleTH }}</p>
        </div>
      </div>

      <div class="mission-values">
        <div class="column">
          <h2 v-if="currentLanguage === 'EN'">MISSION</h2>
          <h2 v-else>ภารกิจ</h2>
          <p v-if="currentLanguage === 'EN'">
            Our mission is to provide high-quality translations that resonate
            with your audience. We aim to break down language barriers,
            fostering communication and understanding across cultures.
          </p>
          <p v-else>
            ภารกิจของเราคือการให้บริการการแปลคุณภาพสูงที่เข้ากับกลุ่มเป้าหมายของคุณ
            เรามุ่งมั่นที่จะทำลายอุปสรรคทางภาษาเพื่อส่งเสริมการสื่อสารและความเข้าใจระหว่างวัฒนธรรม
          </p>
        </div>
        <div class="column">
          <h2 v-if="currentLanguage === 'EN'">VALUES</h2>
          <h2 v-else>ค่านิยม</h2>
          <p v-if="currentLanguage === 'EN'">
            Our values are integrity, professionalism, and dedication. We
            believe in treating every project with utmost care and attention,
            ensuring that your message is conveyed accurately and effectively.
          </p>
          <p v-else>
            ค่านิยมของเราคือ ความซื่อสัตย์ ความเป็นมืออาชีพ และความมุ่งมั่น
            เราเชื่อในการดูแลและใส่ใจทุกรายละเอียดของโครงการ
            เพื่อให้แน่ใจว่าข้อความของคุณถูกถ่ายทอดอย่างถูกต้องและมีประสิทธิภาพ
          </p>
        </div>
      </div>

      <div class="testimonials">
        <h2 v-if="currentLanguage === 'EN'">Client Testimonials</h2>
        <h2 v-else>คำรับรองจากลูกค้า</h2>
        <p v-if="currentLanguage === 'EN'">
          "Words In Thai provided an exceptional service, delivering our project
          on time and exceeding our expectations."
        </p>
        <p v-else>
          "Words In Thai มอบบริการที่ยอดเยี่ยม
          ส่งมอบโครงการของเราได้ตรงเวลาและเกินความคาดหมาย"
        </p>
      </div>

      <div class="call-to-action">
        <h2 v-if="currentLanguage === 'EN'">Ready to Get Started?</h2>
        <h2 v-else>พร้อมที่จะเริ่มต้นแล้วหรือยัง?</h2>
        <p v-if="currentLanguage === 'EN'">
          Contact us today for a free consultation and let us help you with your
          translation needs.
        </p>
        <p v-else>
          ติดต่อเราวันนี้เพื่อขอคำปรึกษาฟรี
          และให้เราช่วยคุณในความต้องการในการแปลของคุณ
        </p>
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
          titleTH: "นักแปล",
          image: "john-doe.JPG",
        },
        {
          id: 2,
          name: "Jane Smith",
          title: "Editor",
          titleTH: "บรรณาธิการ",
          image: "/jane-smith.JPG",
        },
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

.columns {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}

.column {
  flex: 1;
  padding: 10px;
}

.team-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

.mission-values {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}

.testimonials {
  margin: 40px 0;
}

.call-to-action {
  margin: 40px 0;
  padding: 20px;
  border-radius: 8px;
}

.banner {
  position: relative;
  width: 100%;
  height: 400px; /* You can adjust this height as needed */
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area without distortion */
  object-position: 80% 90%; /* Centers horizontally and shows 20% down from the top */
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
  top: 390px;
  left: 45%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #f4f4f4;
  z-index: 1;
}

.about-header h1 {
  color: #24315d;
  font-weight: 100;
}

h2 {
  font-weight: 100;
  color: #24315d;
}

.mission-values h2 {
  color: #ccad00;
  font-weight: 100;
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

  .banner {
    height: 300px;
  }

  .banner-text h1 {
    font-size: 2em;
  }

  .banner-text p {
    font-size: 1.2em;
  }

  .flag {
    position: absolute;
    background-color: #f4f4f4;
    top: 350px;
    left: 43%;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 5px solid #f4f4f4;
    z-index: 1;
  }
}
</style>
