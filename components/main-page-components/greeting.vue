<template>
  <div class="my-main-page-greeeting" :style="`height:${isMobile}`">
    <h1 class="greeting-title">{{ $t("mainPage.greeting") }}</h1>
    <div class="animation-block">
      <img
        class="pipes-image"
        v-if="$isMobile"
        src="/images/first-animation-frames/firstAnimation.png"
        alt="pipes"
      />
      <canvas v-else id="animation_canvas" ref="animationCanvas"></canvas>
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
        return "300vh";
      }
    },
  },
  methods: {
    firstAnimation() {
      if (!this.$isMobile) {
        const html = document.documentElement;

        const canvas = document.getElementById("animation_canvas");
        const context = canvas.getContext("2d");

        const frameCount = 50;
        const currentFrame = (index) =>
          `/images/first-animation-frames/anim${index.toString()}.jpg`;

        const preloadImages = () => {
          for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
          }
        };

        const img = new Image();
        img.src = currentFrame(0);
        canvas.width = 1260;
        canvas.height = 640;
        img.onload = function () {
          context.drawImage(img, 0, 0);
        };

        const updateImage = (index) => {
          img.src = currentFrame(index);
          context.drawImage(img, 0, 0);
        };

        window.addEventListener("scroll", () => {
          const scrollTop = html.scrollTop;
          const maxScrollTop = html.scrollHeight - window.innerHeight;
          const scrollFraction = scrollTop / maxScrollTop;

          const frameIndex = Math.min(
            frameCount - 1,
            Math.ceil(scrollFraction * frameCount * 4)
          );

          requestAnimationFrame(() => updateImage(frameIndex));
        });

        preloadImages();
      }
    },
  },
  mounted() {
    this.firstAnimation();
  },
};
</script>

<style lang="scss">
.my-main-page-greeeting {
  margin-top: 190px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 300vh !important;
  .greeting-title {
    position: sticky;
    top: 30px;
    height: 200px;
    color: $text-dark-blue-color;
    font-size: 64px;
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
    #animation_canvas {
      width: 1260px;
      height: 640px;
    }
  }
  @include max($mediumDesktop) {
    .greeting-title {
      font-size: 44px;
      height: 100px;
    }
    .animation-block {
      margin-top: 60px;
      top: 160px;
    }
  }
  @include max($smallDesktop) {
    .greeting-title {
      font-size: 38px;
      line-height: 44px;
      top: 20px;
    }
    .animation-block {
      margin-top: 60px;
      #animation_canvas {
        width: 1024px;
        height: 520px;
      }
    }
  }
  @include max($largeTablet) {
    margin-top: 220px;
    .greeting-title {
      font-size: 34px;
      line-height: 34px;
      top: 70px;
    }
    .animation-block {
      display: flex;
      justify-content: center;
      align-items: center;
      #animation_canvas {
        width: 768px;
        height: 360px;
      }
    }
  }
  @include max($smallTablet) {
    height: 60vh !important;
    .greeting-title {
      font-size: 26px;
      line-height: 26px;
      position: static;
      height: auto;
    }
    .animation-block {
      margin-top: 40px;
      position: static;
      .pipes-image {
        width: 100%;
      }
    }
  }
  @include max($largeMobile) {
    .greeting-title {
      font-size: 18px;
      line-height: 18px;
    }
  }
}
</style>