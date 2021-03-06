<template>
  <div>
    <Modal
      :amenities="room[0].amenities"
      :room="room"
      :disabled-dates="disabledDates"
      @updateNewStays="updateNewStays"
    />
    <div class="container-fluid px-0">
      <div class="row no-gutters">
        <div class="col-12 col-md-5 position-relative">
          <Carousel
            :image-url="room[0].imageUrl"
            @openLightboxWithIndex.capture="openLightboxWithIndex"
          />
          <div class="sideInfo d-flex flex-column justify-content-between">
            <div class="d-flex sideInfo__leave font-weight-bold" style="z-index: 10;">
              <img :src="require('@/assets/svg/escapeLeft.svg')" alt="">
              <nuxt-link to="/" class="mb-0 ml-2">
                查看其他房型
              </nuxt-link>
            </div>
            <div class="d-flex flex-column align-content-center">
              <h2 class="mb-5  mb-md-0 font-weight-bold">
                {{ room[0].normalDayPrice | currency }}
                <span class="h4"> / 晚</span>
              </h2>

              <button
                class="d-none d-md-block btn btn-primary sideInfo__btn"
                @click.prevent="openModal"
              >
                點此預約
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-7 d-flex flex-column roomDetail">
          <h1>
            {{ room[0].name }}
          </h1>
          <p class="align-self-end mb-5 font-weight-bolder">
            {{ room[0].descriptionShort.GuestMax }}人・ 單人床・ 附早餐・衛浴{{ room[0].descriptionShort['Private-Bath'] }}間・{{ room[0].descriptionShort.Footage }}平方公尺
          </p>

          <div class="d-flex flex-column roomDetail__time">
            <span>
              平日（一～四）價格：{{ room[0].normalDayPrice | currency }} / 假日（五〜日）價格：{{ room[0].holidayPrice | currency }}
            </span>
            <span>
              入住時間：{{ room[0].checkInAndOut.checkInEarly }}（最早）/ {{ room[0].checkInAndOut.checkInLate }}（最晚）退房時間：{{ room[0].checkInAndOut.checkOut }}
            </span>
          </div>

          <div class="d-flex flex-column mb-5">
            <ul>
              <template v-for="(quote, i) in splitDescription">
                <li :key="i">
                  {{ quote | detailCn }}
                </li>
              </template>
            </ul>
          </div>

          <ServiceIcon
            :amenities="room[0].amenities"
            class="roomDetail__serviceIcons align-self-center align-self-md-auto"
          />

          <div class="d-flex flex-column align-self-center align-self-md-auto datePicker">
            <span class="mb-2 font-weight-bolder">
              選取欲入住日期
            </span>
            <div>
              <client-only>
                <date-picker
                  v-model="dateRange"
                  :type="'date'"
                  :format="'YYYY-MM-DD'"
                  :value-type="'format'"
                  :disabled-date="disabledDates"
                  inline
                  range
                />
              </client-only>
            </div>
          </div>
          <button
            class="d-block d-md-none btn btn-primary sideInfo__btn"
            @click.prevent="openModal"
          >
            點此預約
          </button>
        </div>
      </div>
    </div>
    <CoolLightBox
      :items="room[0].imageUrl"
      :index="index"
      :enable-scroll-lock="false"
      @close="index = null"
    />
  </div>
</template>

<script>
import Carousel from '@/components/rooms/Carousel';
import ServiceIcon from '@/components/rooms/ServiceIcon';
import Modal from '@/components/rooms/Modal';
import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

export default {
  layout: 'room',
  components: {
    Carousel,
    ServiceIcon,
    Modal,
    CoolLightBox,
  },
  asyncData(context) {
    return context.$axios.$get(`/room/${context.params.id}`)
      .then((res) => {
        const { booking, room } = res;
        const booked = [];
        const splitDescription = room[0].description
          .trim()
          .split('.')
          .slice(0, 4);

        booking.forEach((reservation) => {
          booked.push(reservation.date);
        });

        return {
          splitDescription,
          booked,
          room,
        };
      })
      .catch(() => context.error);
  },
  data() {
    return {
      dateRange: ['', ''],
      index: null,
    };
  },
  head() {
    return {
      title: `好室 Hotel - ${this.room[0].name}`
    }
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
    disabledDates(date) {
      const vm = this;
      const today = new Date();
      const YYYY = new Date(date).getFullYear();
      const MM = `0${new Date(date).getMonth() + 1}`.slice(-2);
      const DD = `0${new Date(date).getDate()}`.slice(-2);

      return date < today
      || new Date(date).getTime() > new Date().getTime() + 7776000000
      || vm.booked.includes(`${YYYY}-${MM}-${DD}`)
    },
    openLightboxWithIndex(index) {
      const vm = this;
      vm.index = index;
    },
    updateNewStays(newStays) {
      console.log(newStays);
      const vm = this;
      newStays.forEach((newStayDate) => vm.booked.push(newStayDate));
    }
  },
};
</script>

<style lang="scss" scoped>
.sideInfo {
  position: absolute;
  height: 100vh;
  width: 100%;
  padding-left: 160px;
  padding-right: 160px;
  pointer-events: none;
  @media (max-width: 768px) {
    position: relative;
    height: 50vh;
    padding-right: 40px;
    padding-left: 40px;
  }
  &__leave {
    margin-top: 90px;
    pointer-events: auto;
  }
  &__btn {
    pointer-events: auto;
    padding-right: 60px;
    padding-left: 60px;
    margin-bottom: 110px;
    @media (max-width: 768px) {
      margin-left: 60px;
      margin-right: 60px;
    }
  }
}

.roomDetail {
  padding-top: 65px;
  padding-right: 130px;
  padding-left: 40px;
  height: 100vh;
  overflow: auto;
  @media (max-width: 768px) {
    height: 100%;
    overflow-y: visible;
    overflow-x: auto;
    padding-right: 40px;
  }
  &__time {
    margin-bottom: 35px;
  }
  &__serviceIcons {
    @media (max-width: 768px) {
      margin-left: -15px;
    }
  }
  ul {
    padding-left: 20px;
  }
}

.datePicker {
  margin-top: 56px;
  margin-bottom: 59px;
  @media(max-width: 768px) {
    margin-bottom: 16px;
  }
}

.icons {
  @media (max-width: 768px) {
    margin-left: -15px;
  }
}
</style>
