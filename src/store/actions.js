/*
通过mutation间接更新state的多个方法的对象
*/
import {
  RECEIVE_USER_INFO,
  RECEIVE_PRODATA,
} from './mutations-type';
import {
  reqGridProjectList
} from '../api/index'
export default {
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  async getProdata({ commit }, proData) {
    const result = await reqGridProjectList(proData);
    console.log(result,proData)
    // 提交一个mutation
    if (result.code === 0) {
        const proData = result.data;
        commit(RECEIVE_PRODATA, {proData})
    }
    
  },
}