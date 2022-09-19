<template>
  <div class="my-footer-content-wrapper">
    <h1
      class="footer-title"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      {{ $t("mainPage.footerContent.footerTitle") }}
    </h1>
    <div
      class="download-button"
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="1000"
      @click="downloadCatalogue"
    >
      <a :href="currentCatalogue" :download="currentCatalogueName">{{
        $t("mainPage.footerContent.downloadCatalog")
      }}</a>
    </div>
    <div
      class="download-description"
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <p>{{ $t("mainPage.footerContent.downloadDescription") }}</p>
    </div>
    <div
      class="contacts-info"
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div class="contact-link">
        <div class="red-rectangle"></div>
        <a :href="`mailto:${$t('mainPage.footerContent.mail')}`">{{
          $t("mainPage.footerContent.mail")
        }}</a>
      </div>
      <div class="contact-link">
        <div class="red-rectangle"></div>
        <a :href="`tel:${$t('mainPage.footerContent.number')}`">{{
          $t("mainPage.footerContent.number")
        }}</a>
      </div>
    </div>
    <div
      class="address-info"
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div class="address-link">
        <p class="title">{{ $t("mainPage.footerContent.address") }}</p>
        <p class="description">
          {{ $t("mainPage.footerContent.addressDescription") }}
        </p>
      </div>
      <div class="address-link">
        <p class="title">{{ $t("mainPage.footerContent.office") }}</p>
        <p class="description">
          {{ $t("mainPage.footerContent.officeDescription") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentCatalogue() {
      if (
        this.$i18n.locales.find(
          (lang) => lang.code === this.$i18n.loadedLanguages[0]
        ).iso === "tk"
      ) {
        return "/catalogue/tk.pdf";
      } else {
        return "/catalogue/en.pdf";
      }
    },
    currentCatalogueName() {
      if (
        this.$i18n.locales.find(
          (lang) => lang.code === this.$i18n.loadedLanguages[0]
        ).iso === "tk"
      ) {
        return "Turkmensenagat katalog";
      } else {
        return "Turkmensenagat catalogue";
      }
    },
  },
  methods: {
    downloadCatalogue() {
      console.log("Downloaded");
    },
  },
};
</script>

<style lang="scss">
.my-footer-content-wrapper {
  margin-top: 100px;
  width: 100%;
  .footer-title {
    font-size: 64px;
    font-weight: 600;
    text-align: center;
  }
  .download-button {
    height: 42px;
    width: 180px;
    border-radius: 70px;
    background-color: rgba($color: $text-dark-blue-color, $alpha: 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    cursor: pointer;
    transition: 0.4s !important;
    user-select: none;
    &:hover {
      background-color: rgba($color: $text-dark-blue-color, $alpha: 0.2);
    }
    &:active {
      transform: scale(0.99) !important;
    }
  }
  .download-description {
    margin-top: 70px;
    width: 40%;
    p {
      font-size: 22px;
      font-weight: 600;
      line-height: 30px;
      color: $link-red-color;
    }
  }
  .contacts-info {
    margin-top: 70px;
    .contact-link {
      margin: 24px 0;
      display: flex;
      align-items: center;
      transition: 0.4s;
      .red-rectangle {
        width: 14px;
        height: 34px;
        background-color: $link-red-color;
      }
      a {
        margin-left: 10px;
        font-size: 24px;
        font-weight: 400;
        color: $text-dark-blue-color;
        transition: 0.4s;
      }
      &:hover {
        transform: translate(6px);
      }
      &:active {
        transform: scale(0.98);
      }
    }
  }
  .address-info {
    margin-top: 60px;
    margin-bottom: 60px;
    width: 40%;
    .address-link {
      margin-top: 30px;
      .title {
        font-size: 20px;
        font-weight: 600;
        color: $link-red-color;
      }
      .description {
        margin-top: 8px;
        font-size: 20px;
        font-weight: 400;
        color: $text-dark-blue-color;
      }
    }
  }
  @include max($smallDesktop) {
    margin-top: 70px;
    width: 100%;
    .footer-title {
      font-size: 44px;
    }
    .download-button {
      height: 42px;
      width: 180px;
      margin: 40px auto;
    }
    .download-description {
      margin-top: 100px;
      width: 50%;
      p {
        font-size: 20px;
        line-height: 26px;
      }
    }
    .contacts-info {
      .contact-link {
        .red-rectangle {
          height: 28px;
        }
        a {
          font-size: 22px;
          letter-spacing: 1px;
        }
      }
    }
    .address-info {
      width: 50%;
    }
  }
  @include max($largeTablet) {
    margin-top: 70px;
    width: 100%;
    .footer-title {
      font-size: 34px;
    }
    .download-button {
      height: 42px;
      width: 180px;
      margin: 40px auto;
    }
    .download-description {
      margin-top: 100px;
      width: 100%;
      p {
        font-size: 18px;
        line-height: 24px;
      }
    }
    .contacts-info {
      .contact-link {
        .red-rectangle {
          height: 24px;
        }
        a {
          font-size: 20px;
          letter-spacing: 1px;
        }
      }
    }
    .address-info {
      width: 100%;
      margin: 70px 0;
      .address-link {
        margin-top: 30px;
        .title {
          font-size: 18px;
        }
        .description {
          font-size: 18px;
        }
      }
    }
  }
  @include max($smallTablet) {
    .footer-title {
      font-size: 26px;
    }
    .download-button {
      height: 38px;
      width: 152px;
      font-size: 14px;
    }
    .download-description {
      p {
        font-size: 16px;
      }
    }
    .contacts-info {
      .contact-link {
        .red-rectangle {
          height: 22px;
          width: 12px;
        }
        a {
          font-size: 18px;
        }
      }
    }
    .address-info {
      .address-link {
        .title {
          font-size: 16px;
        }
        .description {
          font-size: 16px;
        }
      }
    }
  }
  @include max($largeMobile) {
    .footer-title {
      font-size: 18px;
    }
    .download-button {
      height: 32px;
      width: 137px;
      font-size: 12px;
    }
    .download-description {
      margin: 40px 0 0 0;
      p {
        font-size: 14px;
      }
    }
    .contacts-info {
      margin: 40px 0 0 0;
      .contact-link {
        .red-rectangle {
          height: 22px;
          width: 12px;
        }
        a {
          font-size: 16px;
        }
      }
    }
    .address-info {
      margin: 40px 0 70px 0;
      .address-link {
        .title {
          font-size: 14px;
        }
        .description {
          font-size: 14px;
        }
      }
    }
  }
}
</style>