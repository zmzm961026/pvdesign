<template>
  <div class="line">
    <div>
      <p>温度</p>
      <date-picker></date-picker>
      <ev-echarts 
        :evData="environmentList.温度信息"
        name="温度"
        yUnit="单位（℃）"
      ></ev-echarts>
    </div>
    <div>
      <p>辐照度</p>
      <date-picker></date-picker>
      <ev-echarts 
        :evData="environmentList.辐照度" 
        name="辐照度"
        yUnit="单位（W/㎡）"
      ></ev-echarts>
    </div>
    <div>
      <p>风速</p>
      <date-picker></date-picker>
      <ev-echarts 
        :evData="environmentList.风速" 
        name="风速"
        yUnit="单位（m/s）"
      ></ev-echarts>
    </div>
    <div>
      <p>湿度</p>
      <date-picker></date-picker>
      <ev-echarts 
        :evData="environmentList.湿度" 
        name="湿度"
        yUnit="单位（%）"
      ></ev-echarts>
    </div>
  </div>
</template>

<script>
  import DatePicker from '../DatePicker/DatePicker'
  import evEcharts from '../Echarts/evEcharts'
  export default {
    props: {
      environmentList: {
        type: Object,
        default: function () {
          return {}
        }
      },
    },
    components: {
      evEcharts,DatePicker
    },
    watch: {
      environmentList(newValue, oldValue) {
        this.environmentList = newValue;
      }
    },
  }
</script>

<style scoped>
  .line{
    width: 100%;
    margin-top: 20px;
    height: auto;
  }
  .line>div{
    width: 49.3%;
    height: auto;
    float: left;
    margin-bottom: 1.5%;
    box-shadow:0px 0px 20px #008bff;
    position: relative;
  }
  .line div:nth-child(2n){
    float: right;
  }
  .line p{
    width: 186px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 20px;
    margin: auto;
    margin-top: 40px;
    color: #40a7fd;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  #gridVoltage{
    background : #fff;
    color : #40a7fd;
  }
</style>