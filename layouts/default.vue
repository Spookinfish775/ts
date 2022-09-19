<template>
  <div class="layout-wrapper">
    <div class="container">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from "~/components/layout-components/header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.container {
  @include max($smallDesktop) {
    width: 1024px !important;
  }
  @include max($largeTablet) {
    width: 100% !important;
    padding: 0 24px !important;
  }
  @include max($smallTablet) {
    padding: 0 12px !important;
  }
}
</style>
