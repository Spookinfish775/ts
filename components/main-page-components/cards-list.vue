<template>
  <div class="my-cards-list-wrapper">
    <h3
      class="my-cards-list-title"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      v-html="$t('mainPage.cardsTitle')"
    ></h3>
    <vue-modaltor
      :visible="modalVisibility"
      @hideModal="modalVisibility = false"
      :resize-width="{ 1200: '60%', 992: '80%', 768: '90%' }"
    >
      <template #header>
        <img
          class="modal-close-button"
          @click="modalVisibility = false"
          src="/close.svg"
          alt="close"
        />
        <h1 class="modal-title-text">{{ $t(`${modalProps.mainTitle}`) }}</h1>
      </template>
      <template #body>
        <div
          class="lists"
          v-for="(list, index) in modalProps.lists"
          :key="index"
        >
          <div class="list">
            <h3 class="modal-subtitle-text" v-if="list.subTitle">
              {{ $t(`${list.subTitle}`) }}
            </h3>
            <p
              class="modal-subdescription-text"
              v-for="(description, index) in list.descriptions"
              :key="index"
            >
              <span>-</span> {{ $t(`${description}`) }}
            </p>
          </div>
        </div>
      </template>
    </vue-modaltor>

    <div class="my-cards-list">
      <div
        class="my-card-list-item"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div class="text-side">
          <h3 class="card-title">{{ $t("mainPage.cards.pipesCard.title") }}</h3>
          <p class="card-description">
            {{ $t("mainPage.cards.pipesCard.description") }}
          </p>
          <div class="open-button" accesskey="smooth" @click="showModal">
            {{ $t("mainPage.cards.openMOdal") }}
          </div>
        </div>
        <div class="image-side">
          <img src="/images/pipes.png" alt="pipes" />
        </div>
      </div>

      <div
        class="my-card-list-item"
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div class="text-side">
          <h3 class="card-title-second">
            {{ $t("mainPage.cards.corrugatedPipes.title") }}
          </h3>
          <p class="card-description">
            {{ $t("mainPage.cards.corrugatedPipes.description") }}
          </p>
          <div class="open-button" accesskey="corrugated" @click="showModal">
            {{ $t("mainPage.cards.openMOdal") }}
          </div>
        </div>
        <div class="image-side" style="right: 30px">
          <img src="/images/corrugatedPipes.png" alt="pipes" />
        </div>
      </div>

      <div
        class="my-card-list-item"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
        ref="lastCardListItem"
      >
        <div class="text-side last-text">
          <h3 class="card-title-third">
            {{ $t("mainPage.cards.cabelPipes.title") }}
          </h3>
          <p class="card-description">
            {{ $t("mainPage.cards.cabelPipes.description") }}
          </p>
          <div
            class="open-button"
            accesskey="cableCorrugated"
            @click="showModal"
          >
            {{ $t("mainPage.cards.openMOdal") }}
          </div>
        </div>
        <div class="image-side last-image">
          <img src="/images/cabelPipes.png" alt="pipes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardListInfo from "./cardListInfo";

export default {
  data() {
    return {
      modalVisibility: false,
      modalProps: cardListInfo[0],
    };
  },
  methods: {
    showModal(event) {
      console.log("MODAL OPENED", event.target.accessKey);
      this.modalVisibility = true;
      this.modalProps = cardListInfo.find(
        (info) => info.accessKey === event.target.accessKey
      );
      console.log("MODAL PROPS", this.modalProps);
    },
  },
};
</script>

<style lang="scss">
.modaltor__panel {
  padding: 40px 20px 20px 20px;
  position: relative;
  .modal-close-button {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 20px;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .modal-title-text {
    color: $text-dark-blue-color;
  }
  .modal-subtitle-text {
    color: $text-light-blue-color;
    margin: 16px 0 6px 0;
  }
  .modal-subdescription-text {
    color: $text-dark-blue-color;
    margin: 6px 0 4px 10px;
    span {
      color: rgba($color: $text-dark-blue-color, $alpha: 0.4);
    }
  }
}
.my-cards-list-wrapper {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .my-cards-list-title {
    width: 40%;
    text-align: center;
    color: $text-dark-blue-color;
    font-size: 22px;
    font-weight: 600;
    span {
      color: $link-red-color;
    }
  }
  .my-cards-list {
    margin-top: 80px;
    width: 100%;
    padding: 0 10px;
    .my-card-list-item {
      overflow: hidden;
      margin-top: 20px;
      height: 360px;
      position: relative;
      display: flex;
      justify-content: space-between;
      background-color: #ffffff;
      .text-side {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 44%;
        padding: 70px 0 0 70px;
        .card-title {
          font-size: 32px;
          font-weight: 700;
          color: $text-light-blue-color;
        }
        .card-title-second {
          font-size: 32px;
          font-weight: 700;
          color: $text-light-green-color;
        }
        .card-title-third {
          font-size: 32px;
          font-weight: 700;
          color: $text-dark-red-color;
        }
        .card-description {
          margin-top: 30px;
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
          color: $text-dark-blue-color;
        }
        .open-button {
          z-index: 1000;
          position: absolute;
          bottom: 20px;
          padding: 10px;
          background-color: rgba($color: $link-red-color, $alpha: 0.1);
          font-size: 14px;
          font-weight: 600;
          color: $link-red-color;
          width: 140px;
          border-radius: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.4s;
          cursor: pointer;
          &:hover {
            background-color: rgba($color: $link-red-color, $alpha: 0.2);
          }
          &:active {
            transform: scale(0.98);
          }
          @include max($smallTablet) {
            position: static;
            margin-top: 20px;
          }
        }
      }
      .last-text {
        width: 90%;
        .card-description {
          width: 62%;
        }
      }
      .image-side {
        width: 50%;
        height: 100%;
        position: absolute;
        right: 0;
        img {
          position: inherit;
          right: inherit;
          bottom: 0;
        }
      }
      .last-image {
        right: -4%;
      }
    }
  }
  @include max($smallDesktop) {
    .my-card-list-item {
      .text-side {
        padding: 40px 0 0 40px !important;
      }
      .image-side {
        right: -30px !important;
      }
    }
  }
  @include max($largeTablet) {
    .my-cards-list-title {
      width: 80%;
      font-size: 20px;
    }
    .my-cards-list {
      .my-card-list-item {
        width: 100%;
        height: auto !important;
        flex-direction: column !important;
        padding: 14px 14px 0 14px;
        height: 400px !important;
        .text-side {
          width: 100%;
          height: 50% !important;
          margin-top: 20px;
          padding: 0 !important;
        }
        .last-text {
          width: 100%;
          .card-description {
            width: 100%;
          }
        }
        .image-side {
          width: 100%;
          margin-top: 20px;
          height: 50% !important;
          position: relative !important;
          display: flex;
          justify-content: center;
          img {
            position: absolute;
            right: 14px;
            height: 100%;
          }
        }
      }
    }
  }
  @include max($smallTablet) {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .my-cards-list-title {
      width: 90%;
      font-size: 16px;
    }
    .my-cards-list {
      margin-top: 20px;
      padding: 0;
      .my-card-list-item {
        margin-top: 20px;
        height: auto !important;
        position: relative;
        .text-side {
          display: flex;
          flex-direction: column;
          height: 50%;
          width: 100%;
          padding: 20px 14px 0 14px;
          .card-title {
            font-size: 16px;
          }
          .card-title-second {
            font-size: 16px;
          }
          .card-title-third {
            font-size: 16px;
          }
          .card-description {
            margin-top: 10px;
            font-size: 14px;
          }
        }
        .last-text {
          width: 100%;
          .card-description {
            width: 100%;
          }
        }
        .image-side {
          width: 100%;
          height: 50%;
          position: static !important;
          img {
            position: inherit;
            right: inherit;
            bottom: 0;
          }
        }
        .last-image {
          position: static;
        }
      }
    }
  }
}
</style>