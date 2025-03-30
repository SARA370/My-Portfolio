import { createApp } from 'vue';
import App from '../../new-portfolio/src/App.vue';
import router from '../../new-portfolio/src/router';
import './assets/styles.scss';
import { createI18n } from 'vue-i18n';
import translations from '../../new-portfolio/src/translations';

// Configuration Vue I18n
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: translations,
});

// Création de l'application Vue
const app = createApp(App);

// Ajout du plugin i18n
app.use(i18n);
app.use(router);

// Montage de l'application
app.mount('#app');


// Gestion du curseur personnalisé
const cursor = document.querySelector(".cursor");
if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`
    );
  });
  document.addEventListener("click", () => {
    cursor.classList.add("expand");
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });
}
