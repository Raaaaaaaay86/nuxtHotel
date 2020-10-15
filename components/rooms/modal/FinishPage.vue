<template>
  <div
    id="success"
    class="col-12 d-flex flex-column text-white font-weight-bold result bg--theme disabled"
  >
    <img
      :src="require('@/assets/svg/icons-cancel--white.svg')"
      alt="cancel"
      class="btn__cancel"
      @click.prevent="close"
    >
    <div class="justify-content-center position-relative">
      <img
        :src="require('@/assets/svg/success.svg')"
      >
      <img
        v-if="bookStatus"
        :src="require('@/assets/svg/successCheck.svg')"
        width="39"
        class="sign"
      >
      <img
        v-else
        :src="require('@/assets/svg/icons-cancel--white.svg')"
        width="39"
        class="sign"
      >
    </div>
    <div v-if="bookStatus">
      <h1 class="my-5 text-center">
        預約成功
      </h1>
      <p class="text-center">
        請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，
      </p>
      <p class="text-center">
        若未收到簡訊請來電確認，謝謝您。
      </p>
    </div>
    <div v-else>
      <h1 class="my-5 text-center">
        預約失敗
      </h1>
      <p class="text-center">
        哎呀！晚了一步！您預約的日期已經被預約走了， 再看看其它房型吧
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeModal: {
      type: Function,
      required: true,
    },
  },
  computed: {
    bookStatus() {
      return this.$store.state.bookStatus;
    },
  },
  methods: {
    close() {
      const successPage = document.getElementById('success');
      const infoModal = document.getElementById('info');
      const detailModal = document.getElementById('detail');
      const rowModal = document.getElementById('rowModal');

      // eslint-disable-next-line no-underscore-dangle
      this._props.closeModal();
      successPage.classList.add('disabled');
      infoModal.classList.remove('d-none');
      detailModal.classList.remove('d-none');
      rowModal.classList.remove('h-100');
    },
  },
};
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 80vh;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
  &.disabled {
    display: none !important;
  }
}
.sign {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn__cancel {
  position: absolute;
  right: 40px;
  top: 40px;
  &:hover {
    cursor: pointer;
  }
}
</style>
