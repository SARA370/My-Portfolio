<template>
  <header>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <a href="#home" 
             @click="setActive('home')"
             :class="{ 'active-link': activeSection === 'home' }" 
             class="nav__link">
            <img src="../assets/Imgs/Home.webp" alt="Home" />
          </a>
        </li>
        <li class="nav__item">
          <a href="#services" 
             @click="setActive('services')"
             :class="{ 'active-link': activeSection === 'services' }" 
             class="nav__link">
            <img src="../assets/Imgs/Services.webp" alt="Services" />
          </a>
        </li>
        <li class="nav__item">
          <a href="#portfolio" 
             @click="setActive('portfolio')"
             :class="{ 'active-link': activeSection === 'portfolio' }" 
             class="nav__link">
            <img src="../assets/Imgs/Portfolio.webp" alt="Portfolio" />
          </a>
        </li>
        <li class="nav__item">
          <a href="#contact" 
             @click="setActive('contact')"
             :class="{ 'active-link': activeSection === 'contact' }" 
             class="nav__link">
            <img src="../assets/Imgs/Contact.png" alt="Contact" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      activeSection: 'home',
    };
  },
  methods: {
    setActive(section) {
      this.activeSection = section;
    },
    handleScroll() {
      const sections = ['home', 'services', 'portfolio', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            this.activeSection = section;
          }
        }
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped lang="scss">


.nav {
  &__list {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__item {
    padding: 5px;

    .nav__link {
      display: inline-block;
      transition: transform 0.3s ease;
      padding: 5px;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 50px;
        padding: 0.2em;
        height: 50px;
        object-fit: contain;
        border-radius: 100px;
        box-shadow: 0 0 8px #4600bf39; // Shadow par défaut
      }

      // Classe active corrigée précisément ici
      &.active-link img {
        box-shadow: 0 0 10px #ffffff !important;
        background-color: rgb(249, 249, 249);
        border: 1px double rgb(216, 213, 213);
      }
    }
  }
}


</style>
