<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center service"
    :class="[ amenity ? '' : 'service--disabled' ]"
  >
    <img
      :src="require(`@/assets/png/icon__${service}.png`)"
      alt="service-icon"
    >
    <img
      v-if="amenity"
      :src="require('@/assets/png/icon__check.png')"
      alt="service-available"
      class="service__cross"
    >
    <img
      v-else
      :src="require('@/assets/png/icon__cross.png')"
      alt="service-available"
      class="service__check"
    >
    <span>
      {{ service | service }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    amenity: {
      type: Boolean,
      required: false,
      default: false,
    },
    service: {
      type: String,
      required: false,
      default: 'Breakfast',
    },
    onlyAvailable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .service {
    position: relative;
    &--disabled {
      opacity: 0.5;
    }
    &__check, &__cross {
      position: absolute;
      top: 0;
      right: -12px;
      margin-left: 4px;
    }
    span {
      position: absolute;
      bottom: -14px;
      font-size: 10px;
    }
  }
</style>
