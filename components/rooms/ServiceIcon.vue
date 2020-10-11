<template>
  <div class="roomDetail__service">
    <template v-for="(amenity, i) in amenities">
      <Service
        :key="i"
        :service="i"
        :amenity="amenity"
        only-available
      />
    </template>
  </div>
</template>

<script>
import Service from '@/components/rooms/Service';

export default {
  components: {
    Service,
  },
  props: {
    amenities: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.roomDetail__service {
  display: grid;
  grid-template-columns: repeat(7, 59px);
  grid-template-rows: repeat(2, 59px);
  row-gap: 25px;
  column-gap: 35px;
}
</style>
