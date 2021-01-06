/*
包含n个接口请求函数的模块
抛出多个不需要写 defalut
函数的返回值：promise对象
*/
import ajax from './ajax'
const TEACHER_URL = 'http://teacher.bjhirek.com:4755';
const GRIDPV_URL = 'http://besign.bjhirek.com:4755';
// 1.用户名密码登陆
export const reqLogin = ({ userName, password }) => ajax(`${TEACHER_URL}/service/login/login?userName=${userName}&password=${password}`, {}, 'POST');
// 2.获取并网项目列表
// http://besign.bjhirek.com:4755/api/FangAn/ProjectLis
export const reqGridProjectList = ({userID,page}) => ajax(`${GRIDPV_URL}/api/FangAn/ProjectLis?uid=${userID}&page=${page}`, {});