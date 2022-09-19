<template>
  <div
    class="my-main-page-second-animation"
    ref="secondAnimationWrapper"
    :style="`height:${isMobile}`"
  >
    <div class="firstTrigger" ref="animationStartTrigger"></div>
    <div class="secondTrigger" ref="animationEndTrigger"></div>
    <h1
      class="animation-title"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      {{ $t("mainPage.secondAnimationTitle") }}
    </h1>
    <div
      class="animation-block"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <img
        class="pipe-image"
        v-if="$isMobile"
        src="/images/second-animation-frames/secondAnimation.png"
        alt="pipe"
      />
      <canvas
        v-else
        id="second_animation_canvas"
        ref="secondAnimationCanvas"
      ></canvas>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      if (this.$isMobile) {
        return "50vh";
      } else {
        return "600vh";
      }
    },
  },
  methods: {
    secondAnimation() {
      if (!this.$isMobile) {
        const htmlSecond = document.documentElement;

        const canvasSecond = document.getElementById("second_animation_canvas");
        const contextSecond = canvasSecond.getContext("2d");

        const frameCountSecond = 60;
        const currentFrameSecond = (index) =>
          `/images/second-animation-frames/secanim${index.toString()}.png`;

        const preloadImagesSecond = () => {
          for (let i = 1; i < frameCountSecond; i++) {
            const img = new Image();
            img.src = currentFrameSecond(i);
          }
        };

        const img = new Image();
        img.src = currentFrameSecond(1);
        canvasSecond.width = 1260;
        canvasSecond.height = 640;
        img.onload = function () {
          contextSecond.drawImage(img, 0, 0);
        };

        const updateImageSecond = (index) => {
          img.src = currentFrameSecond(index);
          contextSecond.drawImage(img, 0, 0);
        };

        window.addEventListener("scroll", () => {
          const secScrollTop = htmlSecond.scrollTop;
          const secMaxScrollTop = htmlSecond.scrollHeight - window.innerHeight;
          const secScrollFraction = secScrollTop / secMaxScrollTop;
          const secFrameIndex = Math.min(
            frameCountSecond - 1,
            Math.ceil(secScrollFraction * frameCountSecond)
          );
          requestAnimationFrame(() => updateImageSecond(secFrameIndex));
        });

        preloadImagesSecond();
      }
    },
  },
  mounted() {
    const animationStartTrigger =
      this.$refs.animationStartTrigger.getBoundingClientRect().top;
    const animationEndTrigger =
      this.$refs.animationEndTrigger.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
      if (
        window.pageYOffset > animationStartTrigger &&
        window.pageYOffset < animationEndTrigger
      ) {
        this.secondAnimation();
      }
    });
  },
};
</script>

<style lang="scss">
.my-main-page-second-animation {
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .firstTrigger {
    position: absolute;
    top: -500px;
    z-index: -1;
  }
  .secondTrigger {
    position: absolute;
    top: -100px;
    z-index: -1;
  }
  .animation-title {
    position: sticky;
    top: 60px;
    color: $text-dark-blue-color;
    font-size: 64px;
    height: 200px;
    line-height: 64px;
    font-weight: 600 !important;
    text-align: center;
    width: 80%;
  }
  .animation-block {
    position: sticky;
    top: 260px;
    width: 100%;
    margin-top: 100px;
    padding: 0 10px;
  }
  @include max($smallDesktop) {
    .animation-title {
      font-size: 44px;
      top: 50px;
    }
    .animation-block {
      margin-top: 60px;
      #second_animation_canvas {
        width: 1024px;
        height: 500px;
      }
    }
  }
  @include max($largeTablet) {
    margin-top: 200px;
    .animation-title {
      font-size: 34px;
      top: 70px;
    }
    .animation-block {
      display: flex;
      justify-content: center;
      align-items: center;
      #second_animation_canvas {
        width: 768px;
        height: 400px;
      }
    }
  }
  @include max($smallTablet) {
    height: 60vh !important;
    margin-top: 140px;
    .animation-title {
      font-size: 26px;
      line-height: 26px;
      position: static;
      height: auto;
    }
    .animation-block {
      margin-top: 40px;
      position: static;
      .pipe-image {
        width: 80%;
      }
    }
  }
  @include max($largeMobile) {
    .animation-title {
      font-size: 18px;
      line-height: 18px;
    }
  }
}
</style>