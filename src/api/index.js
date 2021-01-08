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
export const reqGridProjectList = ({ userID, page }) => ajax(`${GRIDPV_URL}/api/FangAn/ProjectLis?uid=${userID}&page=${page}`);
// 3.获取项目详细信息
// http://besign.bjhirek.com:4755/api/FangAn/OpenPro?Pid=
export const openProject = ({ Pid }) => ajax(`${GRIDPV_URL}/api/FangAn/OpenPro?Pid=${Pid}`,{},'POST');
// 3.删除并网项目
// 'http://besign.bjhirek.com:4755/api/FangAn/DeletePro?Pid=' + id,
export const delProject = ({ Pid }) => ajax(`${GRIDPV_URL}/api/FangAn/DeletePro?Pid=${Pid}`, {}, 'POST');
// 4.获取省列表
// http://besign.bjhirek.com:4755/api/FangAn/ProLis、
export const reqProvinceList = () => ajax(`${GRIDPV_URL}/api/FangAn/ProLis`,{},'POST');
// 5.获取市列表
// 'http://besign.bjhirek.com:4755/api/FangAn/CityLis?ProName='+province_name,
export const reqCityList = ({ ProName }) => ajax(`${GRIDPV_URL}/api/FangAn/CityLis?ProName=${ProName}`, {}, 'POST');
// 6.获取城市信息   
// http://besign.bjhirek.com:4755/api/FangAn/CityInfo?pid='+Number(proID)+'&cid='+city_name
export const reqCityInfo = ({ pid,cid }) => ajax(`${GRIDPV_URL}/api/FangAn/CityInfo?pid=${pid}&cid=${cid}`, {}, 'POST');