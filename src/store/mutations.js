/*
直接更新state的多个方法的对象
*/
// import Vue from 'vue'
import {RECEIVE_USER_INFO,RECEIVE_PRODATA} from './mutations-type';
export default {
	[RECEIVE_USER_INFO](state, { userInfo }) {
		state.userInfo = userInfo;
		state.userID = userInfo.userId;
		state.userName = userInfo.userName;
	},
	[RECEIVE_PRODATA](state, { paoData }) {
		state.paoData = paoData;
	},
}