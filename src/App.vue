<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../../new-portfolio/src/components/AppHeader.vue";
import AppFooter from "../../new-portfolio/src/components/AppFooter.vue";
import './assets/styles.scss';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

