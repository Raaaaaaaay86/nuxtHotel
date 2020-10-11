<template>
  <div>
    <Modal
      :amenities="room[0].amenities"
      :room="room"
    />
    <div class="container-fluid px-0">
      <div class="row no-gutters">
        <div class="col-md-5 position-relative">
          <Carousel />
          <div class="sideInfo">
            <div class="d-flex sideInfo__leave">
              <img :src="require('@/assets/svg/escapeLeft.svg')" alt="">
              <nuxt-link to="/" class="mb-0 ml-2">
                查看其他房型
              </nuxt-link>
            </div>
            <div class="d-flex flex-column align-content-center">
              <h2>
                ${{ room[0].normalDayPrice }}
                <span class="h4"> / 晚</span>
              </h2>

              <button
                class="btn btn-primary sideInfo__btn"
                @click.prevent="openModal"
              >
                Booking now
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-7 roomDetail">
          <h1>
            {{ room[0].name }}
          </h1>
          <p class="align-self-end mb-5 font-weight-bolder">
            {{ room[0].descriptionShort.GuestMax }}人・ 單人床・ 附早餐・衛浴{{ room[0].descriptionShort['Private-Bath'] }}間・{{ room[0].descriptionShort.Footage }}平方公尺
          </p>

          <div class="d-flex flex-column roomDetail__time">
            <span>
              平日（一～四）價格：${{ room[0].normalDayPrice }} / 假日（五〜日）價格：${{ room[0].holidayPrice }}
            </span>
            <span>
              入住時間：{{ room[0].checkInAndOut.checkInEarly }}（最早）/ {{ room[0].checkInAndOut.checkInLate }}（最晚）退房時間：{{ room[0].checkInAndOut.checkOut }}
            </span>
          </div>

          <div class="d-flex flex-column mb-5">
            <ul>
              <template v-for="(quote, i) in splitDescription">
                <li :key="i">
                  {{ quote }}.
                </li>
              </template>
            </ul>
          </div>
          <ServiceIcon :amenities="room[0].amenities" />
          <div class="datePicker">
            <span class="mb-2 font-weight-bolder">
              空房狀態查詢
            </span>
            <div>
              <client-only>
                <date-picker
                  v-model="dateRange"
                  :type="'date'"
                  :format="'YYYY-MM-DD'"
                  :value-type="'format'"
                  inline
                  range
                />
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/rooms/Carousel';
import ServiceIcon from '@/components/rooms/ServiceIcon';
import Modal from '@/components/rooms/Modal';

export default {
  layout: 'room',
  components: {
    Carousel,
    ServiceIcon,
    Modal,
  },
  asyncData(context) {
    return context.$axios.$get(`/room/${context.params.id}`)
      .then((res) => {
        const { booking, room } = res;
        const splitDescription = room[0].description
          .trim()
          .split('.')
          .slice(0, 4);
        return {
          splitDescription,
          booking,
          room,
        };
      })
      .catch(() => context.error);
  },
  data() {
    return {
      dateRange: ['', ''],
    };
  },
  watch: {
    dateRange() {
      const vm = this;
      this.$store.commit('SET_RV_INFO', vm.dateRange);
    },
  },
  methods: {
    openModal() {
      const modalId = document.getElementById('rvModal');
      modalId.classList.remove('disabled');
    },
  },
};
</script>

<style lang="scss" scoped>
.sideInfo {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  padding-left: 160px;
  padding-right: 160px;
  &__leave {
    margin-top: 90px;
  }
  &__btn {
    padding-right: 60px;
    padding-left: 60px;
    margin-bottom: 110px;
  }
}
.roomDetail {
  padding-top: 65px;
  padding-right: 130px;
  padding-left: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  &__time {
    margin-bottom: 35px;
  }
  ul {
    padding-left: 20px;
  }
}
.datePicker {
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  margin-bottom: 59px;
}
.test {
  width: 300px;
  height: 300px;
  background-color: red;
}
</style>
