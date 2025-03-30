<template>
  <div class="not-found">
    <div class="background-404">404</div> <!-- Texte "404" en arrière-plan -->
    <h1>
      <span class="digit" id="digit1">4</span>
      <span class="digit" id="digit2">0</span>
      <span class="digit" id="digit3">4</span>
    </h1>
    <p class="animated-text">Oups ! La page que vous recherchez n'existe pas.</p>
    <router-link to="/">Retour à l'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: "ErrorPage404",
  mounted() {
    document.title = "404 - Page non trouvée | Mon Portfolio"; // Titre SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "La page que vous recherchez n'existe pas. Retournez à l'accueil pour continuer à naviguer.";
    document.head.appendChild(metaDescription);
  },
};
</script>

