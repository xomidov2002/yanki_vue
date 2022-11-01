<template>
  <section class="hero min-h-screen">
    <div class="hero-slider h-full">
      <swiper 
        :slides-per-view="setSliderPerView" 
        :space-between="0" 
        loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" 
        :modules="[Autoplay]" 
      >
        <swiper-slide v-for="img in slider_images" :key="img">
          <img class="w-full h-screen object-cover" :src="img" alt="hero-image" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="hero-content absolute top-1/2 z-10 w-full -translate-y-1/2 text-center text-white">
        <h1 class="text-3xl">Новая коллекция</h1>
        <div class="line h-[1px] w-32 bg-white mx-auto my-4"></div>
        <p class="uppercase text-sm flex justify-center items-center">
          <span>Смотреть Новинки</span>
          <img class="ml-2 -rotate-90" :src="require('@/assets/icons/row.svg')" alt="arrow"></p>
          <p>djfs</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters("ui", ["GET_WINDOW_WIDTH"]),
    setSliderPerView() {
        if(this.GET_WINDOW_WIDTH < 768) {
            return 1
        }else if(this.GET_WINDOW_WIDTH < 1024) {
            return 2
        }else {
            return 3
        }

    }
  },
  data() {
    return {
      Autoplay,
      slider_images: [
        require("@/assets/images/Yanki-1.jpg"),
        require("@/assets/images/Yanki-2.jpg"),
        require("@/assets/images/Yanki-3.jpg"),
      ],
    };
  },
};
</script>