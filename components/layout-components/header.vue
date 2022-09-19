<template>
  <div class="my-header">
    <div class="logo">
      <img src="/images/logo.png" alt="" />
    </div>
    <div class="button-group">
      <LangSwitcher />
      <div class="contact-us-btn" @click="goToContacts">
        {{ $t("header.contacts") }}
      </div>
    </div>
  </div>
</template>

<script>
import LangSwitcher from "~/components/layout-components/lang-switcher.vue";

export default {
  components: {
    LangSwitcher,
  },
  methods: {
    goToContacts() {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style lang="scss">
.my-header {
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 60px;
  .button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contact-us-btn {
      font-size: 14px;
      font-weight: 600;
      padding: 0 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 42px;
      color: $link-red-color;
      background-color: rgba($color: $link-red-color, $alpha: 0.1);
      border-radius: 70px;
      transition: 0.4s;
      cursor: pointer;
      &:hover {
        background-color: rgba($color: $link-red-color, $alpha: 0.2);
      }
      &:active {
        transform: scale(0.98);
      }
    }
  }
  @include max($smallDesktop) {
    width: 1024px;
  }
  @include max($largeTablet) {
    width: 100%;
    left: 0;
    padding: 0 24px;
    .logo {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translate(-50%);
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        width: 260px;
      }
    }
    .button-group {
      flex-direction: row-reverse;
      width: 100%;
    }
  }
  @include max($largeMobile) {
    padding: 0 12px;
    top: 30px;
  }
}
</style>