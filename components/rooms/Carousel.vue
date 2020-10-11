<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active" />
      <li data-target="#carouselExampleCaptions" data-slide-to="1" />
      <li data-target="#carouselExampleCaptions" data-slide-to="2" />
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item overflow-hidden active">
        <img
          :src="require('@/assets/img/room1/bg1.jpeg')"
          class="carousel-item-img d-block w-100"
          alt="..."
        >
      </div>
      <div class="carousel-item overflow-hidden">
        <img
          :src="require('@/assets/img/room1/bg2.jpeg')"
          class="carousel-item-img d-block w-100"
          alt="..."
        >
      </div>
      <div class="carousel-item overflow-hidden">
        <img
          :src="require('@/assets/img/room1/bg3.jpeg')"
          class="carousel-item-img d-block w-100"
          alt="..."
        >
      </div>
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

<style lang="scss" coped>
.carousel {
  position: absolute;
  &-item {
    &-img{
      height: 100vh;
    }
  }
}
</style>
