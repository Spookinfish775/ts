<template>
  <div class="main-page-content">
    <Greeting />
    <CardsList />
    <SecondAnimation />
    <FooterContent />
  </div>
</template>

<script>
import Greeting from "~/components/main-page-components/greeting.vue";
import CardsList from "~/components/main-page-components/cards-list.vue";
import SecondAnimation from "~/components/main-page-components/secon-animation.vue";
import FooterContent from "~/components/main-page-components/footer-content.vue";

export default {
  components: {
    Greeting,
    CardsList,
    SecondAnimation,
    FooterContent,
  },
};
</script>

<style lang="scss">
.main-page-content {
  width: 100%;
}
</style>