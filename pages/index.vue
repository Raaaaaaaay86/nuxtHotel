<template>
  <div class="container-fluid h-100 root">
    <div class="row h-100">
      <!--sidebar start-->
      <div class="col-12 col-md-3 offset-md-1 d-flex flex-column justify-content-center align-items-center">
        <img
          :src="require('@/assets/img/logo.png')"
          alt="logo"
          class="hotelLogo"
        >
        <div class="hotelInfo text-white">
          <p class="hotelInfo__title">
            好室旅店。HOUSE HOTEL
          </p>
          <div class="hotelInfo__detail">
            <p>
              花蓮縣花蓮市國聯一路1號
            </p>
            <p>
              03-8321155
            </p>
            <p>
              HOUSE@HOTEL.COM
            </p>
          </div>
        </div>
      </div>
      <!--sidebar end-->
      <!--cube start-->
      <div class="col-12 col-md-7 py-3 overflow-hidden d-flex justify-content-center align-items-center">
        <div class="cubeGroup">
          <template v-for="(i, key) in roomsId">
            <nuxt-link :key="key" :to="`/rooms/${i}`" :class="`cubeGroup__cube${key + 1}`" />
          </template>
        </div>
      </div>
      <!--cube end-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['roomsId']),
  },
};
</script>

<style lang="scss" scoped>

.hotelLogo {
  width: 142px;
  height: 255px;
  margin-bottom: 185px;
  @media (max-width: 768px) {
    margin-top: 45px;
    margin-bottom: 45px;
  }
}

.hotelInfo {
  font-size: 12px;
  &__title {
    font-weight: bolder;
  }
  &__detail {
    font-weight: lighter;
    p {
      margin-bottom: 6px;
    }
  }
}

.cubeGroup {
  display: grid;
  margin: 0;
  row-gap: 0;
  grid-template-columns: repeat(3, 275px);
  grid-template-rows: repeat(2, 275px);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 350px);
    grid-template-rows: repeat(6, 275px);
    row-gap: 30px;
  }
}

@for $i from 1 through 6 {
  .cubeGroup__cube#{$i} {
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/room#{$i}/bg1.jpeg');
    background-size: cover;
    background-position: center;
    position: relative;
    &:hover{
      &::after{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 19px;
        height: 100%;
        width: 100%;
        background-color: rgba(56, 71, 11, .8);
      }
    }
  }
}

.cubeGroup__cube6 {
  &:hover {
    &::after {
      content: 'Single Room';
    }
  }
}

.cubeGroup__cube5 {
  &:hover {
    &::after {
      content: 'Deluxe Single Room';
    }
  }
}

.cubeGroup__cube4 {
  &:hover {
    &::after {
      content: 'Double Room';
    }
  }
}

.cubeGroup__cube3 {
  &:hover {
    &::after {
      content: 'Deluxe Double Room';
    }
  }
}

.cubeGroup__cube2 {
  &:hover {
    &::after {
      content: 'Twin Room';
    }
  }
}

.cubeGroup__cube1 {
  &:hover {
    &::after {
      content: 'Deluxe Twin Room';
    }
  }
}
</style>
