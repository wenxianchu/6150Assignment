export default {
  namespace: 'home',
  state: {
    minenav: {
      couponstatus: 1,
      couponActive: 0,
    },

    THIME: {
      0: '#fff',
      1: 'linear-gradient(60deg, #fff, #000) no-repeat',
    },
    isFlag: false,
  },
  reducers: {
    setminenav(state: any, data: any) {
      return {
        ...state,
        minenav: data.data,
      };
    },
    setFalg(state: any, data: any) {
      return {
        ...state,
        isFlag: data.data,
      };
    },
  },
  effects: {
    *saveMineNavStatus(status: any, { call, put }: any) {
      console.log(status.payload, 'status');
      yield put({
        type: 'setminenav',
        data: status.data,
      });
    },

    *saveStatus({ payload }: any, { call, put }: any) {
      yield put({
        type: 'setFalg',
        data: payload.isFlag,
      });
    },
  },
};
