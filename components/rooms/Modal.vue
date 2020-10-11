<template>
  <div id="rvModal" class="layer layer--flex-center disabled">
    <div class="cModal border border-primary">
      <div class="container-fluid px-0">
        <BookingPage v-bind="$attrs" />
      </div>
    </div>
  </div>
</template>

<script>
import BookingPage from '@/components/rooms/modal/BookingPage';

export default {
  components: {
    BookingPage,
  },
};
</script>

<style lang="scss" scoped>
.layer {
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all .3s;
  &--flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.disabled {
    display: none !important;
  }
}

.cModal {
  width: 80%;
  &__userInfo {
    padding: 10px 65px;
    display: flex;
    align-items: center;
  }
  &__detail {
    padding: 10px 65px;
    position: relative;
  }
  &__form {
    padding-bottom: 14px;
  }
}
</style>
