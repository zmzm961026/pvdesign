/*
直接更新state的多个方法的对象
*/
// import Vue from 'vue'
import * as type from './mutations-type';
// {RECEIVE_USER_INFO,RECEIVE_PRODATA,RECEIVE_PROID,RECEIVE_PRO_TYPE,RECEIVE_CITYID}
export default {
	[type.RECEIVE_USER_INFO](state, { userInfo }) {
		state.userInfo = userInfo;
		state.userID = userInfo.userId;
		state.userName = userInfo.userName;
	},
	[type.RECEIVE_PRO_TYPE](state, { proType }) {
		state.proType = proType;
	},
	[type.RECEIVE_PRODATA](state,proData) {
		state.proData = proData.项目名称;
		state.proPage = proData.总页数;
	},
	[type.RECEIVE_PROID](state,{data,proID}) {
		state.proData = data;
		state.proID = proID;
	},
	// [type.RECEIVE_CITYID](state,ProvinceCity) {
	// 	console.log(ProvinceCity)
	// 	state.ProvinceCity = ProvinceCity;
	// },
	[type.RECEIVE_PROVINCECITY](state,ProvinceCity) {
		// console.log(ProvinceCity)
		state.ProvinceCity = ProvinceCity;
	},
}