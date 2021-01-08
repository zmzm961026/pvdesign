<template>
  <div>
    <Header />
    <div class="top1" style="height: 130px;"></div>
    <div class="content">
      <!-- 项目信息 -->
      <ProjectHeader :hTitle="hTitle" :hWidth="'226px'"/>
      <!-- 项目地选择 -->
      <div class="map">
        <div class="map_left">
          <div class="prov">
            <p>省市：</p>
            <!-- <select v-model="province" placeholder="请选择省" @change="getCity()">
              <option style="display: none;">--请选择省--</option>
              <option v-for="item in provinceList" :key="item" :label="item" 
                :value="item" >{{item}}</option>
            </select>
            <select v-model="city" placeholder="请选择市" style="margin-left: 10px;">
              <option style="display: none;">--请选择市--</option>
              <option v-for="item in cityList" :key="item.id" :label="item.city" 
                :value="item.city" >{{item.city}}</option>
            </select> -->
            <el-select v-model="province" placeholder="请选择省" @change="getCity()"> 
              <el-option
                v-for="item in provinceList" 
                :key="item" 
                :label="item" 
                :value="item" >{{item}}
              </el-option>
            </el-select>
            <el-select v-model="city" placeholder="请选择市" @change="cityInfo($event)" style="margin-left: 10px;">
              <el-option 
                v-for="item in cityList" 
                :key="item.id" 
                :label="item.city" 
                :value="item.city" >{{item.city}}
              </el-option>
            </el-select>
          </div>
          <ul class="latitude">
            <li>经度：{{llia.经度}}°</li>
            <li>纬度：{{llia.纬度}}°</li>
            <li>倾角：{{llia.倾角}}°</li>
            <li>海拔：{{llia.海拔}}m</li>
            <div class="clear"></div>
          </ul>
          <ul class="temp">
            <li>
              <img src="./images/a6.png"/>
              <p>温度</p>
            </li>
            <li>
              <img src="./images/a7.png"/>
              <p>辐照度</p>
            </li>
            <li>
              <img src="./images/a8.png"/>
              <p>风速</p>
            </li>
            <li>
              <img src="./images/a9.png"/>
              <p>湿度</p>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div id="map" class="map_right"></div>
        <div class="clear"></div>
        <!-- <button>保存</button> -->
      </div>
      <!-- 环境信息 -->
      <ProjectEnvironment :environmentList="environmentList"/>
      <div class="clear"></div>
      <div class="button" id="rBtn">
        <a href="Gridpv_project.html"><button>上一步</button></a>
        <button id="next">下一步</button>
        <a id="returnIndex" href="index.html"><button>返回首页</button></a>
      </div>
    </div>
    <div class="top1" style="height: 130px;"></div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import Footer from '../../components/Footer/Footer'
  import ProjectHeader from '../../components/Project/ProjectHeader'
  // import ProjectMap from '../../components/Project/ProjectMap'
  import ProjectEnvironment from '../../components/Project/ProjectEnvironment'
  import {
    reqProvinceList,
    reqCityList,
    reqCityInfo
  } from '../../api/index'
  import Vuex from 'vuex'
  import { mapState,mapMutations,mapActions } from "vuex";
  export default {
    components:{
      Header,Footer,ProjectHeader,ProjectEnvironment
    },
    data() {
      return {
        hTitle: '—方案信息',
        provinceList:[],   // 省份列表
        cityList:[],   // 城市列表
        province:'',// 省份
        city:"",// 城市
        cityID:"",// 城市ID
        llia:{},// 经纬度倾角、海拔
        environmentList:{},// 折线图数据
      }
    },
    mounted () {
      // this.$store.dispatch('getProvince')
      this.getProvince()
    },
    computed:{
      ...mapState(['proID'])
    },
    methods: {
      async getProvince() {
        const result = await reqProvinceList();
        console.log(result)
        this.provinceList=result[0];
      },
      async getCity(){
        const result = await reqCityList({ProName:this.province});
        this.cityList = result[0];
        // this.cityID = props ? this.cityList.find(ele => ele.id === val).name : ''
        console.log(this.cityList,this.cityID)
      },
      ...mapMutations(['receive_cityid']),
      async cityInfo(event){
        let obj = {}
        obj = this.cityList.find(item => item.city === this.city ) //筛选出对应数据
        this.cityID = obj.id;
        this.environmentList = await reqCityInfo({pid:this.proID,cid:this.cityID});
        this.llia = this.environmentList.经纬度[0];
        if(this.cityID) Promise.all([this.receive_cityid({province:this.province,city:obj.city,cityID:this.cityID})]);
      },
    },
    watch: {
      province: function (newValue, oldValue) {
        this.city = ''
        this.cityID = '';
        this.llla={};
      }
    },
  }
</script>
<style scoped>
  .content{
    width: 1340px;
    height: auto;
    background: #40a7fd;
    border-radius: 17px;
    padding:67px 80px 25px 80px;
    color:#fff;
  }
  .map{
    width: 100%;
    height: auto;
    box-shadow:0px 0px 20px #008bff;
  }
  .map_left{
    width: 400px;
    margin: 0 30px;
    float: left;
  }
  .prov{
    height: 30px;
    display: flex;
    padding: 27px 0;
  }
  .prov p {
    float: left;
    line-height: 30px;
    width: 68px;
  }
  .prov select{
    flex: 1;
    display: block;
    border:1px solid #ffffff;
    background-color: #40a7fd;
    box-shadow:0px 0px 2px #3d3d3d inset;
    color:#fff;
    height: 26px;
    text-indent: 10px;
  }
  .prov select option{
    background: #fff;
    color:#40a7fd;
  }
  .latitude li{
    width: 37.5%;
    float: left;
    padding: 20px 0;
    height: 30px;
    line-height: 30px;
  }
  .latitude li:nth-child(2n),.temp li:nth-child(2n){
    float: right;
  }
  .latitude li p{
    float: left;
  }
  .temp li{
    width: 37.5%;
    height: 70px;
    float: left;
    text-align: center;
    background-color: #fff;
    border-radius: 12px;
    margin: 23px 0 7px 0;
  }
  .temp li img{
    margin-right: 17px;
  }
  .temp li img,.temp li p{
    display: inline-block;
    color:#40a7fd;
    line-height: 70px;
  }
  .map_right{
    width:765px;
    height: 387px;
    float: right;
    margin: 30px 30px 30px 0;
  }
  .map button{
    display: block;
    background-color: #ffffff;
    width: 80px;
    height: 40px;
    border-radius: 20px;
    color:#40a7fd;
    margin: auto;
    margin-top: 50px;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 2px;
    box-shadow:8px 8px 16px #008bff;
  }
</style>