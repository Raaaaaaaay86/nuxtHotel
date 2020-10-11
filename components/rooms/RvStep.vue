<template>
  <div class="card">
    <div class="card__header bg--theme">
      <img :src="require(`@/assets/svg/rv${step}.svg`)" alt="icon">
    </div>
    <div class="card__content">
      <p v-if="step === '1'">
        <small>送出線上預約單</small>
      </p>
      <p v-else-if="step === '2'">
        <small>
          系統立即回覆是否預訂成功<br>
          並以簡訊發送訂房通知<br>
          (若未收到簡訊請來電確認)
        </small>
      </p>
      <p v-else-if="step === '3'">
        <small>
          入住當日憑訂房通知<br>
          以現金或刷卡付款即可<br>
          (僅接受VISA.JCB.銀聯卡)
        </small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 200px;
  min-height: 130px;
  margin-right: 40px;
  position: relative;
  &::after {
    content: '>';
    font-size: 30px;
    position: absolute;
    top: 0;
    right: -30px;
    color: #38470B;
  }
  &:last-of-type {
    &::after {
      content:'',
    }
  }
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  &__content {
    text-align: center;
    padding: 5px 10px;
    border-radius: 0px 0px 10% 10%;
  }
}
</style>
