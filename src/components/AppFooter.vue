<!-- AppFooter.vue -->
<template>
  <footer>
    <p>{{ $t('footer.copyright') }}</p></footer>
</template>


<script>
export default {
  name: "AppFooter",
  computed: {
    translatedCopyright() {
      return this.$t("footer.copyright");
    },
  },
};
</script>

<style lang="scss" scoped>
// Variables SCSS
$footer-text-color: rgb(0, 0, 0);
$footer-padding: 10px 0;

// Footer Styles
footer {
  color: $footer-text-color;
  text-align: center;
  padding: $footer-padding;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
</style>
