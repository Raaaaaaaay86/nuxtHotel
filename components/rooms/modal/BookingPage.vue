<template>
  <div class="row no-gutters">
    <div class="col-md-4 text-white bg-primary cModal__userInfo">
      <form class="cModal__form w-100">
        <div class="form-group">
          <label for="name">
            姓名
          </label>
          <input v-model="name" class="form-control" type="text"></input>
        </div>
        <div class="form-group">
          <label for="telephone">
            手機號碼
          </label>
          <input v-model="tel" class="form-control" type="telephone"></input>
        </div>
        <div class="form-group">
          <label for="name">
            入住日期
          </label>
          <input
            id="coDate"
            v-model="reservation.start"
            class="form-control"
            type="date"
            @change.prevent="updateDate"
          ></input>
        </div>
        <div class="form-group">
          <label for="name">
            退房日期
          </label>
          <input
            id="coDate"
            v-model="reservation.end"
            class="form-control"
            type="date"
            @change.prevent="updateDate"
          ></input>
        </div>
        <span>
          <span v-if="reservation.days !== undefined">
            {{ reservation.days }}晚，
          </span>
          <span v-if="reservation.weakday !== undefined">
            {{ reservation.weakday }}晚平日
          </span>
          <span v-if="reservation.holiday !== undefined">
            {{ reservation.holiday }}晚假日
          </span>
        </span>
        <hr class="border-white">
        <p class="mb-0 text-right">
          總計
        </p>
        <p class="h4 text-right mb-4">
          ${{ (room[0].normalDayPrice * reservation.weakday + room[0].holidayPrice * reservation.holiday) }}
        </p>
        <button
          class="mb-3 btn btn-outline-white font-weight-bold py-2 w-100"
          @click.prevent="booking"
        >
          確認送出
        </button>
        <p class="text-center ">
          <small>此預約系統僅預約功能，並不會對您進行收費</small>
        </p>
      </form>
    </div>
    <div class="col-md-8 bg-white cModal__detail">
      <img
        :src="require('@/assets/svg/icons-cancel.svg')"
        alt="cancel"
        class="btn__cancel"
        @click.prevent="closeModal"
      >
      <h4 class="font-weight-bold mb-3">
        {{ room[0].name }}
      </h4>
      <div class="mb-4">
        <p class="mb-0">
          {{ room[0].descriptionShort.GuestMax }}人・ 單人床・ 附早餐・衛浴{{ room[0].descriptionShort['Private-Bath'] }}間・{{ room[0].descriptionShort.Footage }}平方公尺
        </p>
        <p>
          平日（一～四）價格：${{ room[0].normalDayPrice }} / 假日（五〜日）價格：${{ room[0].holidayPrice }}
        </p>
      </div>
      <ServiceIcon class="mb-5" v-bind="$props" />
      <div class="mb-3">
        <h4 class="font-weight-bold">
          訂房資訊
        </h4>
        <ul>
          <li>入住時間：最早{{ room[0].checkInAndOut.checkInEarly }}，最晚{{ room[0].checkInAndOut.checkInLate }}；退房時間：{{ room[0].checkInAndOut.checkOut }}，請自行確認行程安排。</li>
          <li>平日定義週一至週四；假日定義週五至週日及國定假日。</li>
          <li>好室旅店全面禁止吸菸。</li>
          <li>若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。</li>
        </ul>
      </div>
      <div>
        <h4 class="font-weight-bold mb-3">
          預約流程
        </h4>
        <div class="d-flex">
          <RvSteop :step="'1'" />
          <RvSteop :step="'2'" />
          <RvSteop :step="'3'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceIcon from '@/components/rooms/ServiceIcon';
import RvSteop from '@/components/rooms/RvStep';

export default {
  components: {
    ServiceIcon,
    RvSteop,
  },
  props: {
    amenities: {
      type: Object,
      required: true,
    },
    room: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      tel: '',
    };
  },
  computed: {
    reservation() {
      return this.$store.getters.rvInfo;
    },
  },
  methods: {
    closeModal() {
      const modalId = document.getElementById('rvModal');
      modalId.classList.add('disabled');
    },
    booking() {
      const vm = this;
      const { name, tel } = vm;
      const info = {
        name,
        tel,
        id: this.$route.params.id,
      };
      this.$store.dispatch('booking', info);
    },
    updateDate() {
      console.log(this.reservation);
      this.$store.commit('UPDATE_RV_INFO', this.reservation);
    },
  },
};
</script>

<style lang="scss" scoped>

.btn__cancel {
  position: absolute;
  right: 40px;
  top: 40px;
  &:hover {
    cursor: pointer;
  }
}

.cModal {
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
