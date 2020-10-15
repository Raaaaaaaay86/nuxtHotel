<template>
  <div id="rvModal" class="layer layer--flex-center disabled">
    <BookingPage v-bind="$attrs" />
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
</style>
