<template>
  <div class="my-lang-switcher">
    <div class="my-current-lang-wrapper" @click="openLangs">
      <span v-if="!$isMobile" class="my-current-lang">{{
        currentLang.iso
      }}</span>
      <span v-else class="my-current-lang">{{ currentLang.name }}</span>
    </div>
    <div class="my-lang-list-wrapper" ref="myLangList">
      <div
        class="my-lang-btn"
        v-for="(lang, index) in langs"
        :key="index"
        @click="setLocale(lang.code)"
      >
        <span v-if="!$isMobile">{{ lang.iso }}</span>
        <span v-else>{{ lang.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentLang() {
      return this.$i18n.locales.find(
        (lang) => lang.code === this.$i18n.loadedLanguages[0]
      );
    },
    langs() {
      let langs = [];
      for (let i = 0; i < this.$i18n.locales.length; i++) {
        if (this.$i18n.locales[i].iso !== this.currentLang.iso) {
          langs.push(this.$i18n.locales[i]);
        }
      }
      return langs;
    },
  },
  methods: {
    openLangs(event) {
      this.$refs.myLangList.classList.toggle("opened-langs-list");
      console.log(this.$i18n);
    },
    setLocale(lang) {
      if (this.currentLang.code !== lang) {
        this.$i18n.setLocale(lang);
        window.location.reload();
      }
    },
  },
};
</script>

<style lang="scss" >
.my-lang-switcher {
  position: relative;
  margin-right: 20px;
  @include max($largeTablet) {
    margin-right: 0 !important;
  }
  .my-current-lang-wrapper {
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    align-items: center;
    transition: 0.4s;
    user-select: none;
    cursor: pointer;
    span {
      color: $link-red-color;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
    }
    &:hover {
      background-color: rgba($color: $link-red-color, $alpha: 0.1);
    }
    &:active {
      transform: scale(0.98);
    }
    .my-current-lang {
      padding: 6px;
    }
  }
  .my-lang-list-wrapper {
    margin-top: 4px;
    border-radius: 15px;
    z-index: -1;
    position: absolute;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: 0.4s;
    background-color: #f8ebeb;
    .my-lang-btn {
      transition: 0.4s;
      width: 90%;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0;
      cursor: pointer;
      border-radius: 15px;
      span {
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        color: $link-red-color;
      }
      &:hover {
        background-color: #ffffff;
      }
    }
  }
  .opened-langs-list {
    z-index: 10;
    opacity: 1;
  }
}
</style>