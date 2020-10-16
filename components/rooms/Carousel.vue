<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators custom-indicators-setting">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active" />
      <li data-target="#carouselExampleCaptions" data-slide-to="1" />
      <li data-target="#carouselExampleCaptions" data-slide-to="2" />
    </ol>
    <div class="carousel-inner">
      <template v-for="(img, key) in imageUrl">
        <div
          :key="key"
          class="carousel-item"
          :class="{ 'active' : key === 0 }"
        >
          <div
            class="carousel-item-img"
            :style="`backgroundImage: url(${img})`"
          />
        </div>
      </template>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: Array,
      required: false,
      default: () => [1, 2, 3],
    },
  },
};
</script>

<style lang="scss" coped>
.carousel {
  position: absolute;
  height: 100%;
  width: 100%;
  &-inner {
    height: 100vh;
    @media (max-width: 768px) {
      height: 50vh
    }
  }
  &-item {
    width: 100%;
    height: 100%;
    &-img{
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    @media (max-width: 768px) {
      height: 50vh;
      position: absolute;
    }
    }
  }
}

.custom-indicators-setting {
  & > li {
    border: 1px solid #38470B;
    &.active {
      background-color: #38470B;
    }
  }
}
</style>
