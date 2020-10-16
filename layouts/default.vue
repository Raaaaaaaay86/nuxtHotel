<template>
  <div class="root">
    <div
      id="carouselExampleIndicators"
      class="carousel slide d-none d-md-block"
      data-ride="carousel"
    >
      <ol
        class="carousel-indicators justify-content-start"
        style="bottom: 50px"
      >
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        <li data-target="#carouselExampleIndicators" data-slide-to="3" />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="require('@/assets/img/house/bg1.jpeg')" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img :src="require('@/assets/img/house/bg2.jpeg')" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img :src="require('@/assets/img/house/bg3.jpeg')" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img :src="require('@/assets/img/house/bg4.jpeg')" class="d-block w-100">
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  background-size: cover;
  background-position: center top;
  @media(max-width: 768px) {
    height: auto;
    background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),
    url('../assets/img/house/bg1.jpeg');
  }
}

</style>
