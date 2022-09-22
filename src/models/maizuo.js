import {getCinemaListService} from '../services/maizuo'

export default {
  namespace: 'maizuo',
  state: {
    isShow:true,
    list: []
  },
  reducers: {
    hide(prevState, action){
      return {
        ...prevState,isShow: false
      }
    },
    show(prevState, action){
      return {
        ...prevState,isShow: true
      }
    },
    changeCinemaList(prevState, {payload}) {
      return {...prevState, list: payload}
    }
  },
  // 异步请求 - redux-saga
  effects: {
    *getCinemaList(action, {call, put}){
      var res = yield call(getCinemaListService)
      console.log(res)
      yield put({
        type:'changeCinemaList',
        payload: res.data.data.cinemas
      })
    }
  }
}