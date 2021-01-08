/*
通过mutation间接更新state的多个方法的对象
*/
import {
  RECEIVE_USER_INFO,
  RECEIVE_PRO_TYPE,
  RECEIVE_PRODATA,
  RECEIVE_PROID,
} from './mutations-type';
import {
  reqGridProjectList,
  openProject,
} from '../api/index'
export default {
  // 并网
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  receiveProtype({ commit }, proType) {
    console.log(proType)
    commit(RECEIVE_PRO_TYPE, proType)
  },  // 获取项目列表
  async getProdata({ commit }, proData) {
    const result = await reqGridProjectList(proData);
    console.log(result,proData)
    // 提交一个mutation
    commit(RECEIVE_PRODATA, result)
  },
  // 存储项目ID
  async recordProID({ commit }, {proID}) {
    const result = await openProject({ Pid: proID });
    console.log(result)
    commit(RECEIVE_PROID,{data:result,proID:proID})
  },
  receiveProvinceCity() {
    
  }
}