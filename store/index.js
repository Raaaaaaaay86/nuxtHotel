/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = () => ({
  rooms: [],
  rv: {},
  bookStatus: false,
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

    const stayArray = [];
    const stopTime = new Date(end).getTime();
    let currentTime = new Date(start).getTime();
    while (currentTime <= stopTime) {
      const YYYY = new Date(currentTime).getFullYear();
      const MM = new Date(currentTime).getMonth() + 1;
      const DD = new Date(currentTime).getDate();
      stayArray.push(`${YYYY}-${MM}-${DD}`);
      currentTime += 86400000;
    }
    stayArray[0] = context.state.rv.start;
    stayArray[stayArray.length - 1] = context.state.rv.end;

    const sendData = {
      name,
      tel,
      id,
      date: stayArray,
    };

    return this.$axios.$post(`/room/${bookerInfo.id}`, sendData)
      .then((res) => {
        console.log(res);
        context.commit('BOOK_SUCCESS');
      })
      .catch(() => {
        context.commit('BOOK_FAIL');
      });
  },
};

const mutations = {
  SET_ROOMS_DATA(state, data) {
    state.rooms = data;
  },
  SET_RV_INFO(state, info) {
    const start = info[0];
    const end = info[1];

    const endTime = new Date(end).getTime();
    const dateArray = [];
    let currentTime = new Date(start).getTime();
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

    state.rv = {
      start,
      end,
      weakday,
      holiday,
      days: mapDate.length,
    };
  },
  UPDATE_RV_INFO(state, newRv) {
    this.commit('SET_RV_INFO', [newRv.start, newRv.end]);
  },
  BOOK_FAIL(state) {
    state.bookStatus = false;
  },
  BOOK_SUCCESS(state) {
    state.bookStatus = true;
  },
};

const getters = {
  roomsId(state) {
    const arrangedIds = [
      '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu',
      'g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ',
      'RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg',
      'kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ',
      'VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz',
      'YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb',
    ];

    return arrangedIds;
  },
  rvInfo(state) {
    return { ...state.rv };
  },
  bookStatus(state) {
    return state.bookStatus;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
