<template>
  <div class="about-page">
    <div class="banner">
      <img src="/thailand.jpg" alt="Banner Image" class="banner-image" />
      <div class="banner-text">
        <h1 v-if="currentLanguage === 'EN'">Words In Thai</h1>
        <h1 v-else>ภาษาไทย</h1>

        <p v-if="currentLanguage === 'EN'">
          Your trusted partner for professional translation services.
        </p>
        <p v-else>พันธมิตรที่คุณไว้วางใจสำหรับบริการแปลมืออาชีพ</p>
        <div class="banner-buttons">
          <button @click="navigateToContact" class="banner-btn">
            {{ currentLanguage === "EN" ? "Contact Us" : "ติดต่อเรา" }}
          </button>
          <button @click="navigateToServices" class="banner-btn">
            {{ currentLanguage === "EN" ? "Our Services" : "บริการของเรา" }}
          </button>
        </div>
      </div>
    </div>

    <div class="about-section">
      <div class="about-header">
        <h3 v-if="currentLanguage === 'EN'">Work With Translation Experts</h3>
        <h3 v-else>ทำงานกับผู้เชี่ยวชาญด้านการแปล</h3>
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
          <h3 v-if="currentLanguage === 'EN'">OUR LINGUISTS</h3>
          <h3 v-else>นักแปลของเรา</h3>
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
          <h3 v-if="currentLanguage === 'EN'">SERVICES</h3>
          <h3 v-else>บริการ</h3>
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
          <h3 v-if="currentLanguage === 'EN'">TEAM</h3>
          <h3 v-else>ทีมงาน</h3>
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

      <section class="services-section">
        <div class="container">
          <div class="service-card" v-if="currentLanguage === 'EN'">
            <img
              src="https://wordsinthai.com/wp-content/uploads/2020/07/1071e6146bfbbb8018d2c36358a988c4-document-circle-icon-by-vexels-150x150.png"
              alt="Document Translation"
            />
            <h3>Document Translation</h3>
            <p>
              Get flawless and accurate translations by top industry experts for
              all your documents across multiple industries.
            </p>
          </div>
          <div class="service-card" v-else>
            <img
              src="https://wordsinthai.com/wp-content/uploads/2020/07/1071e6146bfbbb8018d2c36358a988c4-document-circle-icon-by-vexels-150x150.png"
              alt="การแปลเอกสาร"
            />
            <h3>การแปลเอกสาร</h3>
            <p>
              รับการแปลที่ถูกต้องและแม่นยำจากผู้เชี่ยวชาญด้านการแปลสำหรับเอกสารของคุณในหลายอุตสาหกรรม
            </p>
          </div>

          <div class="service-card" v-if="currentLanguage === 'EN'">
            <img
              src="https://wordsinthai.com/wp-content/uploads/elementor/thumbs/movie-icon-11-ostgcvzkou0mp4sfb4l7p24p6sje6ikh1uhma14skw.png"
              alt="Video Translation"
            />
            <h3>Video Translation</h3>
            <p>
              Quick and accurate video transcription and translation services by
              experienced professionals.
            </p>
          </div>
          <div class="service-card" v-else>
            <img
              src="https://wordsinthai.com/wp-content/uploads/elementor/thumbs/movie-icon-11-ostgcvzkou0mp4sfb4l7p24p6sje6ikh1uhma14skw.png"
              alt="การแปลวิดีโอ"
            />
            <h3>การแปลวิดีโอ</h3>
            <p>
              บริการถอดเสียงและแปลวิดีโออย่างรวดเร็วและแม่นยำโดยมืออาชีพที่มีประสบการณ์
            </p>
          </div>

          <div class="service-card" v-if="currentLanguage === 'EN'">
            <img
              src="https://wordsinthai.com/wp-content/uploads/elementor/thumbs/vidgames-ostgcvzkou0mp4sfb4l7p24p6sje6ikh1uhma14skw.png"
              alt="Game Localization"
            />
            <h3>Game/Software Localization</h3>
            <p>
              Flawless translations for games, catering to target audiences and
              maintaining relevance in overseas markets.
            </p>
          </div>
          <div class="service-card" v-else>
            <img
              src="https://wordsinthai.com/wp-content/uploads/elementor/thumbs/vidgames-ostgcvzkou0mp4sfb4l7p24p6sje6ikh1uhma14skw.png"
              alt="การแปลเกม/ซอฟต์แวร์"
            />
            <h3>การแปลเกม/ซอฟต์แวร์</h3>
            <p>
              การแปลที่ถูกต้องสำหรับเกม
              โดยคำนึงถึงกลุ่มเป้าหมายและรักษาความเกี่ยวข้องในตลาดต่างประเทศ
            </p>
          </div>

          <div class="service-card" v-if="currentLanguage === 'EN'">
            <img
              src="https://wordsinthai.com/wp-content/uploads/2020/07/96d12090c2b368b8c72d2dfb6e44e360-computer-circle-icon-with-drop-shadow-by-vexels-150x150.png"
              alt="Website Localization"
            />
            <h3>Website Localization</h3>
            <p>
              Design your website translations to resonate with visitors while
              maintaining content integrity.
            </p>
          </div>
          <div class="service-card" v-else>
            <img
              src="https://wordsinthai.com/wp-content/uploads/2020/07/96d12090c2b368b8c72d2dfb6e44e360-computer-circle-icon-with-drop-shadow-by-vexels-150x150.png"
              alt="การแปลเว็บไซต์"
            />
            <h3>การแปลเว็บไซต์</h3>
            <p>
              ออกแบบการแปลเว็บไซต์ของคุณให้มีความสัมพันธ์กับผู้เยี่ยมชมในขณะที่รักษาความสมบูรณ์ของเนื้อหา
            </p>
          </div>

          <div class="service-card" v-if="currentLanguage === 'EN'">
            <img
              src="https://wordsinthai.com/wp-content/uploads/elementor/thumbs/image-ostgcvzkou0mp4sfb4l7p24p6sje6ikh1uhma14skw.png"
              alt="E-Learning Translation"
            />
            <h3>E-Learning Translation</h3>
            <p>
              Flexible translations for e-learning platforms, enhancing
              understanding with relevant terminologies.
            </p>
          </div>
          <div class="service-card" v-else>
            <img
              src="https://wordsinthai.com/wp-content/uploads/elementor/thumbs/image-ostgcvzkou0mp4sfb4l7p24p6sje6ikh1uhma14skw.png"
              alt="การแปลการเรียนรู้ออนไลน์"
            />
            <h3>การแปลการเรียนรู้ออนไลน์</h3>
            <p>
              การแปลที่ยืดหยุ่นสำหรับแพลตฟอร์มการเรียนรู้ออนไลน์
              เพิ่มความเข้าใจด้วยคำศัพท์ที่เกี่ยวข้อง
            </p>
          </div>

          <div class="service-card" v-if="currentLanguage === 'EN'">
            <img
              src="https://wordsinthai.com/wp-content/uploads/elementor/thumbs/WebdesignXpertLab-ostgcvzkou0mp4sfb4l7p24p6sje6ikh1uhma14skw.png"
              alt="E-Commerce Translation"
            />
            <h3>E-Commerce Translation</h3>
            <p>
              Error-free translations for e-stores to boost conversions and add
              credibility to your business.
            </p>
          </div>
          <div class="service-card" v-else>
            <img
              src="https://wordsinthai.com/wp-content/uploads/elementor/thumbs/WebdesignXpertLab-ostgcvzkou0mp4sfb4l7p24p6sje6ikh1uhma14skw.png"
              alt="การแปลอีคอมเมิร์ซ"
            />
            <h3>การแปลอีคอมเมิร์ซ</h3>
            <p>
              การแปลที่ปราศจากข้อผิดพลาดสำหรับร้านค้าออนไลน์เพื่อเพิ่มการแปลงและเพิ่มความน่าเชื่อถือให้กับธุรกิจของคุณ
            </p>
          </div>
        </div>
      </section>

      <div class="mission-values">
        <div class="mission-value">
          <h3 v-if="currentLanguage === 'EN'">MISSION</h3>
          <h3 v-else>ภารกิจ</h3>
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
        <div class="mission-value">
          <h3 v-if="currentLanguage === 'EN'">VALUES</h3>
          <h3 v-else>ค่านิยม</h3>
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

      <div class="mission-values">
        <div class="testimonials">
          <h3 v-if="currentLanguage === 'EN'">CLIENT TESTIMONIALS</h3>
          <h3 v-else>คำรับรองจากลูกค้า</h3>
          <p v-if="currentLanguage === 'EN'">
            "Words In Thai provided an exceptional service, delivering our
            project on time and exceeding our expectations."
          </p>
          <p v-else>
            "Words In Thai มอบบริการที่ยอดเยี่ยม
            ส่งมอบโครงการของเราได้ตรงเวลาและเกินความคาดหมาย"
          </p>
        </div>

        <div class="call-to-action">
          <h3 v-if="currentLanguage === 'EN'">READY TO GET STARTED?</h3>
          <h3 v-else>พร้อมที่จะเริ่มต้นแล้วหรือยัง?</h3>
          <p v-if="currentLanguage === 'EN'">
            Contact us today for a free consultation and let us help you with
            your translation needs.
          </p>
          <p v-else>
            ติดต่อเราวันนี้เพื่อขอคำปรึกษาฟรี
            และให้เราช่วยคุณในความต้องการในการแปลของคุณ
          </p>
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
        {
          id: 3,
          name: "Alice Brown",
          title: "Project Manager",
          titleTH: "ผู้จัดการโครงการ",
          image: "/alice-brown.JPG",
        },
      ],
    };
  },
};
</script>

<style scoped>
.about-page {
  border-radius: 5px;
  border-top: none;
}

.about-section {
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  max-width: 1200px;
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

.intro-text {
  margin: 20px 30px;
}

h2 {
  color: #333;
  font-size: 2em;
  margin: 20px 0 20px;
  text-transform: uppercase; /* Make headings uppercase */
}

.columns {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}

.column {
  flex: 1;
  padding: 10px;
  margin: 0px 20px;
}

p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #24315d;
}

.team-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
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

.mission-value {
  flex: 1;
  padding: 20px;
  margin: 0 10px;
}

.testimonials {
  margin: 40px 0;
}

.call-to-action {
  margin: 40px 0;
  border-radius: 8px;
}

.banner {
  position: relative;
  width: 100vw;
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
  color: white;
}

.banner-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.banner-btn {
  padding: 10px 20px;
  border: 1px solid #24315d;
  border-radius: 50px;
  background-color: #24315d;
  color: white;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s, color 0.3s;
}

.banner-btn:hover {
  color: #24315d;
  background-color: white;
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

  .mission-values {
    flex-direction: column; /* Stack mission and values sections */
  }

  .mission-value {
    margin-bottom: 20px; /* Add spacing between stacked items */
  }

  .team-section {
    flex-direction: column;
    align-items: center;
  }

  .team-member {
    width: 40%; /* Make team members full width on small screens */
  }
}

.services-section {
  padding: 40px 0;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.service-card {
  flex: 0 1 calc(33.333% - 20px);
  margin: 10px;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
}
.service-card img {
  width: 100px;
  height: auto;
}
h3 {
  margin: 15px 0;
  font-size: 1.5em;
  color: #24315d;
}
p {
  color: #555;
}
@media (max-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
