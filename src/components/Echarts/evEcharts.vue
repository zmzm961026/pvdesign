<template>
  <div ref="myChart" class="zxt"></div>
</template>

<script>
  import { mapState,mapMutations,mapActions } from "vuex";
  import commonstate  from '@/common/global.js'
  export default {
    name: 'evEcharts',
    props: {
      name: {
        type: String,
        default: ''
      },
      yUnit: {
        type: String,
        default: ''
      },
      evData: {
        type: Array,
        default: function () {
          return []
        }
      },
    },
    data() {
      return {
        xData: commonstate.YEAR_ARR,
        yData:this.evData,
        xUnit:'月（m）'
      }
    },
    // mounted(){
    //   this.drawLine();
    //   console.log(this.yData)
    // },
    computed:{
      ...mapState(['ProvinceCity'])
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.myChart)
        // // 绘制图表
        var option = {
          toolbox: {
            right: '45',
            show: true,
            showTitle: true,
            feature: {
              saveAsImage: {
                title: '保存为图片',
                backgroundColor: '#008bff',
                // color:'#fff',
                name:this.ProvinceCity.city + name
              }
            },
            iconStyle:{
              borderColor:'#fff'
            },
            emphasis:{
              iconStyle:{
                borderColor:'#fff'
              },
            },
          },
          tooltip: {
            trigger: 'axis',
          },
          grid: {
            left: '7%',
            bottom: '3%',
            right:'15%',
            containLabel: true
          },
          title: {
            show: true,
            text: this.ProvinceCity.city  + name,
            x:'center',
            textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                color: '#40a7fd',
            },
          },
          xAxis: [
            {       
              axisLabel: {
                textStyle: {
                  color: '#fff'
                }
              }, 
              name: this.xUnit,
              nameTextStyle :{
                fontSize: 14,
                fontWeight:'bold'
				      },
              type: 'category',
              data:this.xData,
              axisLine:{
                lineStyle:{
                  color: '#fff'  //更改坐标轴颜色
                }
              }
            }
          ],
          yAxis: [
            {
              axisLabel: {
                textStyle: {
                  color: '#fff'   //刻度颜色
                }
              }, 
              name: this.yUnit,
              nameTextStyle :{
                fontSize: 14,
                fontWeight:'bold'
              },
              type: 'value',
              axisLine: {
                show: true,
                lineStyle:{
                  color:'#fff' //更改坐标轴颜色
                }
              }
            }
          ],
          series: [{
            name:name, 
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            data: this.yData,
            connectNulls: true,
            color:'#e60012',
                //曲线颜色
          }]
        };
        myChart.resize()
        myChart.setOption(option);
      }
    },
    watch: {
      evData(newValue, oldValue) {
        this.yData=newValue;
        this.drawLine();
      }
    },
  }
</script>

<style scoped>
  .zxt{
    background:none;width: 100%;
  }
  .zxt:nth-child(2n){
    float: right;
  }
  p{
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
</style>