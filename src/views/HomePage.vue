<template>
  <div>
    <!-- Header Section avec Logo, Date, Jour et Horloge -->
    <div :class="['hero-section-top-part', { scrolled: hasScrolled }]">
      <div class="hero-section-top-part-left">
        <router-link to="/">
          <img :src="logo" alt="Logo" class="logo" />
        </router-link>
      </div>

      <div class="hero-section-top-part-right">
        <button @click="toggleTheme">
          <img :src="isDarkMode ? sunIcon : moonIcon" alt="Toggle Theme" class="icon" />
        </button>

        <button @click="toggleLanguage">
          {{ language === "fr" ? "EN" : "FR" }}
        </button>
        <div class="info date-time-container">
          <p class="current-date">{{ currentDate }}</p>
          <p class="current-time">{{ currentTime }}</p>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero__centre">
        <div class="info-box">
          <img :src="personalPhoto" alt="Profile Picture" class="profile-image" />
          <div class="circle-available"></div>
          <h1 class="info-box__title">Hello, I'm Sarah 👋</h1>
          <h2 class="info-box__subtitle">Junior Full-Stack Developer</h2>
          <p class="info-box__description">
            Crafting digital experiences that are pixel-perfect, engaging, and
            accessible, designed to captivate and inspire! From creating sleek,
            interactive front-ends to developing robust, dynamic back-ends, I
            handle every aspect with precision and creativity.
            <br />
            Ready to Elevate Your Digital Presence? Book a Call and let's
            discuss how we can transform your ideas into reality.
          </p>
          <div class="info-box__buttons">
            <button class="info-box__button info-box__book-a-call">
              Book a Call
            </button>
            <button class="info-box__button info-box__button--cv">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <!-- Social Icons directement intégrées -->
      <div class="social-icons">
        <ul class="social-icons__list">
          <li v-for="icon in socialIcons" :key="icon.platform" class="social-icons__item">
            <a :href="icon.link" :aria-label="icon.platform" target="_blank" rel="noopener noreferrer">
              <div class="social-icons__content">
                <span>{{ icon.platform }}</span>
                <img class="social-icons__icon" :src="icon.imgSrc" :alt="icon.platform + ' icon'" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section" id="services">
      <div class="services-section__title">
        <h2>
          <span>Services</span>
          <span class="services-section__bg-text">SERVICES</span>
        </h2>
      </div>
      <div class="services-section__list">
        <div class="services-section__item" v-for="(service, index) in services" :key="index">
          <div class="services-section__card">
            <div class="services-section__card-front">
              <span class="services-section__number">{{ index + 1 }}</span>
              <img :src="service.icon" :alt="service.title" class="services-section__icon" />
              <h3>{{ service.title }}</h3>
              <p class="services-section__description">{{ service.description }}</p>
            </div>
            <div class="services-section__card-back">
              <div v-for="category in service.details" :key="category.title">
                <h4>{{ category.title }}</h4>
                <div class="tool-list">
                  <span v-for="tool in category.tools" :key="tool" class="tool-item">{{ tool }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio" id="portfolio">
      <div class="portfolio__title">
        <h2>Portfolio <span class="portfolio__bg-text">PORTFOLIO</span></h2>
      </div>

      <div class="portfolio__buttons">
        <button v-for="category in categories" :key="category" @click="filterCategory(category)" :class="{ active: selectedCategory === category }">
          {{ category }}
        </button>
      </div>

      <div class="portfolio__images">
        <div v-for="image in filteredImages" :key="image.id" class="portfolio__image-item">
          <div class="portfolio__image-wrapper">
            <img :src="image.src" :alt="image.alt" class="portfolio__image" />
            <div class="portfolio__overlay">
              <h3 class="portfolio__project-name">{{ image.alt }}</h3>
              <div class="portfolio__icons">
                <img v-for="icon in image.icons" :key="icon.alt" :src="icon.src" :alt="icon.alt" class="portfolio__icon" />
              </div>
              <a :href="image.projectLink" class="portfolio__view-button">Voir le projet</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="contact-section__content">
        <div class="contact-section__title">
          <h2>
            <span>Contact</span>
            <span class="bg-text">CONTACT</span>
          </h2>
        </div>

        <!-- Messages de succès et d'erreur -->
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <!-- Formulaire de Contact -->
        <div class="contact-section__form">
          <form class="form__container" @submit.prevent="submitForm">
            <!-- Champ Nom -->
            <div class="form__input-container">
              <input
                v-model="form.name"
                type="text"
                name="name"
                class="form__input"
                id="Name"
                required
                placeholder=" "
              />
              <label for="Name">Nom</label>
            </div>

            <!-- Champ Email -->
            <div class="form__input-container">
              <input
                v-model="form.email"
                type="email"
                name="email"
                class="form__input"
                id="Email"
                required
                placeholder=" "
              />
              <label for="Email">Email</label>
            </div>

            <!-- Champ Sujet -->
            <div class="form__input-container">
              <input
                v-model="form.subject"
                type="text"
                name="subject"
                class="form__input"
                id="Subject"
                required
                placeholder=" "
              />
              <label for="Subject">Sujet</label>
            </div>

            <!-- Champ Téléphone -->
            <div class="form__input-container">
              <input
                v-model="form.phone"
                type="tel"
                name="phone"
                class="form__input"
                id="Phone"
                placeholder=" "
              />
              <label for="Phone">Téléphone</label>
            </div>

            <!-- Champ Message -->
            <div class="form__input-container form__textarea-container">
              <textarea
                v-model="form.message"
                id="Message"
                class="form__input form__textarea"
                required
                placeholder=" "
              ></textarea>
              <label for="Message">Message</label>
            </div>

            <!-- Bouton Soumettre -->
            <button type="submit" class="form__submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>

  </div>
</template>



<script>
import youtubeIcon from "@/assets/Imgs/youtube-icone.webp";
import githubIcon from "@/assets/Imgs/github-icone.webp";
import linkedinIcon from "@/assets/Imgs/Linkedin-icone.webp";
import behanceIcon from "@/assets/Imgs/Behance-icone.webp";

import illustrationImage from "@/assets/Imgs/Illustration.webp";
import moodboardImage1 from "@/assets/Imgs/Moodboard_1.webp";
import moodboardImage2 from "@/assets/Imgs/Moodboard_2.webp";
import moodboardImage3 from "@/assets/Imgs/Moodborad_3.webp";
import moodboardImage4 from "@/assets/Imgs/Moodboard_4.webp";
import charteGraphique1 from "@/assets/Imgs/Chartegraphique_1.webp";
import charteGraphique2 from "@/assets/Imgs/chartegraphique_2.webp";
import natoursImage from "@/assets/Imgs/Natours.webp";
import nexterImage from "@/assets/Imgs/nexter.webp";
import omnifoodImage from "@/assets/Imgs/Omnifood.webp";
import quoteImage from "@/assets/Imgs/quote.webp";
import sociallifeImage from "@/assets/Imgs/sociallife.webp";
import spaceImage from "@/assets/Imgs/space.webp";
import app3D from "@/assets/Imgs/3D.webp";
import eCommerceApp from "@/assets/Imgs/E-CommerceApp.webp";
import financeApp from "@/assets/Imgs/FianceApp.webp";
import uiAppScreenMockup from "@/assets/Imgs/ui_app_screen_mockup.webp";
import walletX from "@/assets/Imgs/WalletX.webp";
import weArtApp from "@/assets/Imgs/WeArtApp.webp";
import safePregnancyApp from "@/assets/Imgs/SafePregnancyApp.webp";

import codingIcon from "@/assets/Imgs/coding.webp";
import designIcon from "@/assets/Imgs/Design.webp";
import seoIcon from "@/assets/Imgs/SEO.webp";

export default {
  name: "HomePage",
  data() {
    return {
      isDarkMode: false,
      language: "fr",
      currentDate: "",
      currentTime: "",
      hasScrolled: false,

      form: {
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      },
      successMessage: "",
      errorMessage: "",

      socialIcons: [
        { platform: "YouTube", link: "https://www.youtube.com/@LifeBits-h7m/shorts", imgSrc: youtubeIcon },
        { platform: "GitHub", link: "https://github.com/SARA370", imgSrc: githubIcon },
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/sarah-al-rashid-92ab2a220/", imgSrc: linkedinIcon },
        { platform: "Behance", link: "https://www.behance.net/", imgSrc: behanceIcon },
      ],

      services: [
        {
          icon: codingIcon,
          title: "Développement Web Full-Stack",
          description: "Création de sites web performants et dynamiques.",
          details: [
            { title: "Front-End", tools: ["HTML", "CSS", "JavaScript", "Vue.js", "React"] },
            { title: "Back-End", tools: ["Node.js", "Express", "Django"] },
            { title: "Bases de Données", tools: ["MongoDB", "MySQL", "PostgreSQL"] },
          ],
        },
        {
          icon: designIcon,
          title: "UI/UX Design et Graphisme",
          description: "Création d'interfaces et de designs intuitifs.",
          details: [
            { title: "Outils de Design", tools: ["Figma", "Adobe XD", "Sketch"] },
            { title: "Graphisme", tools: ["Photoshop", "Illustrator", "Canva"] },
            { title: "Prototypage", tools: ["InVision", "Principle"] },
          ],
        },
        {
          icon: seoIcon,
          title: "SEO",
          description: "Optimisation pour attirer plus de visiteurs.",
          details: [
            { title: "Recherche de Mots-Clés", tools: ["Google Keyword Planner", "Ahrefs", "SEMrush"] },
            { title: "Suivi des Performances", tools: ["Google Analytics", "Search Console"] },
            { title: "Audit Technique", tools: ["Screaming Frog", "GTmetrix", "Web.dev"] },
          ],
        },
      ],

      selectedCategory: "All",
      categories: ["All", "code", "UI/UX", "Graphisme"],

      images: [
        { id: 1, src: illustrationImage, alt: "Illustration Project", category: "Graphisme", projectLink: "#" },
        { id: 2, src: moodboardImage1, alt: "Moodboard 1", category: "Graphisme", projectLink: "#" },
        { id: 3, src: moodboardImage2, alt: "Moodboard 2", category: "Graphisme", projectLink: "#" },
        { id: 4, src: moodboardImage3, alt: "Moodboard 3", category: "Graphisme", projectLink: "#" },
        { id: 5, src: moodboardImage4, alt: "Moodboard 4", category: "Graphisme", projectLink: "#" },
        { id: 6, src: charteGraphique1, alt: "Charte Graphique 1", category: "Graphisme", projectLink: "#" },
        { id: 7, src: charteGraphique2, alt: "Charte Graphique 2", category: "Graphisme", projectLink: "#" },
        { id: 8, src: natoursImage, alt: "Natours Project", category: "code", projectLink: "#" },
        { id: 9, src: nexterImage, alt: "Nexter Project", category: "code", projectLink: "#" },
        { id: 10, src: omnifoodImage, alt: "Omnifood Project", category: "code", projectLink: "#" },
        { id: 11, src: quoteImage, alt: "Quote App", category: "code", projectLink: "#" },
        { id: 12, src: sociallifeImage, alt: "Social Life", category: "code", projectLink: "#" },
        { id: 13, src: spaceImage, alt: "Space Project", category: "code", projectLink: "#" },
        { id: 14, src: app3D, alt: "3D App", category: "UI/UX", projectLink: "#" },
        { id: 15, src: eCommerceApp, alt: "E-Commerce App", category: "UI/UX", projectLink: "#" },
        { id: 16, src: financeApp, alt: "Finance App", category: "UI/UX", projectLink: "#" },
        { id: 17, src: uiAppScreenMockup, alt: "UI Screen", category: "UI/UX", projectLink: "#" },
        { id: 18, src: walletX, alt: "WalletX", category: "UI/UX", projectLink: "#" },
        { id: 19, src: weArtApp, alt: "WeArt App", category: "UI/UX", projectLink: "#" },
        { id: 20, src: safePregnancyApp, alt: "Safe Pregnancy App", category: "UI/UX", projectLink: "#" },
      ],
    };
  },

  computed: {
    filteredImages() {
      if (this.selectedCategory === "All") return this.images;
      return this.images.filter(img => img.category === this.selectedCategory);
    }
  },

  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
    window.addEventListener("scroll", this.handleScroll);
    this.isDarkMode = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark-mode", this.isDarkMode);
    document.documentElement.classList.toggle("light-mode", !this.isDarkMode);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark-mode", this.isDarkMode);
      document.documentElement.classList.toggle("light-mode", !this.isDarkMode);
    },

    toggleLanguage() {
      this.language = this.language === "fr" ? "en" : "fr";
      this.$i18n.locale = this.language;
    },

    updateTime() {
      const now = new Date();
      this.currentDate = now.toLocaleDateString(this.language === "fr" ? "fr-FR" : "en-US");
      this.currentTime = now.toLocaleTimeString(this.language === "fr" ? "fr-FR" : "en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    },

    handleScroll() {
      this.hasScrolled = window.scrollY > 50;
    },

    filterCategory(category) {
      this.selectedCategory = category;
    },

    submitForm() {
      if (this.form.name && this.form.email && this.form.message) {
        this.successMessage = "Message envoyé avec succès ✅";
        this.errorMessage = "";
        this.form = { name: "", email: "", subject: "", phone: "", message: "" };
      } else {
        this.successMessage = "";
        this.errorMessage = "Veuillez remplir tous les champs obligatoires.";
      }
    }
  }
};
</script>


