/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = () => ({
  rooms: [],
  rv: {},
});

const actions = {
  nuxtServerInit(vuexContext, context) {
    return context.$axios.$get('/rooms')
      .then((res) => {
        vuexContext.commit('SET_ROOMS_DATA', res.items);
      });
  },
  booking(context, bookerInfo) {
    const { name, tel, id } = bookerInfo;
    const { start, end } = context.state.rv;
    let currentTime = new Date(start).getTime();
    const stopTime = new Date(end).getTime();
    const stayArray = [];

    while (currentTime <= stopTime) {
      const YYYY = new Date(currentTime).getFullYear();
      const MM = new Date(currentTime).getMonth() + 1;
      const DD = new Date(currentTime).getDate();
      stayArray.push(`${YYYY}-${MM}-${DD}`);

      currentTime += 86400000;
    }

    const sendData = {
      name,
      tel,
      id,
      date: stayArray,
    };

    this.$axios.$post(`/room/${bookerInfo.id}`, sendData)
      .then((res) => {
        console.log(res);
      });
  },
};

const mutations = {
  SET_ROOMS_DATA(context, data) {
    context.rooms = data;
  },
  SET_RV_INFO(context, info) {
    const start = info[0];
    const end = info[1];
    let currentTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();
    const dateArray = [];

    while (currentTime <= endTime) {
      dateArray.push(currentTime);
      currentTime += 86400000;
    }

    const mapDate = dateArray.map((el) => {
      if (new Date(el).getDay() === 0 || new Date(el).getDay() === 6) {
        return false;
      }
      return true;
    }).slice(0, -1);

    const weakday = mapDate.filter((el) => el === true).length;
    const holiday = mapDate.filter((el) => el === false).length;

    context.rv = {
      start,
      end,
      weakday,
      holiday,
      days: mapDate.length,
    };
  },
  UPDATE_RV_INFO(context, newRv) {
    this.commit('SET_RV_INFO', [newRv.start, newRv.end]);
  },
};

const getters = {
  roomsId(state) {
    const ids = [];
    const data = state.rooms;
    const arr = Object.keys(data).map((key) => data[key]);

    arr.sort((a, b) => a.normalDayPrice < b.normalDayPrice)
      .forEach((el) => {
        ids.push(el.id);
      });

    return ids;
  },
  rvInfo(state) {
    return { ...state.rv };
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
