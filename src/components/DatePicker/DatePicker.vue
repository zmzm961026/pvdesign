<template>
  <div class="time">
    <div id="time1" class="time_check">
      <label onclick="city(tab('city').options[tab('city').selectedIndex].getAttribute('id'))"><input name="wd_time" type="radio" class="tui-checkbox" value="" checked />年</label>
      <label><input name="wd_time" type="radio" class="tui-checkbox" value="" />月</label>
      <label><input name="wd_time" type="radio" class="tui-checkbox" value="" />日</label>
    </div>
    <div id="time_input1" class="time_input">
      <input type="text" id="wd_y" autocomplete="off" class="Wdate datebom"  style="display: block;border:1px solid #40a7fd;box-shadow:0 0 0; background: none;"/>
      <!--  onclick="WdatePicker({ maxDate: '%y-%M-%d', skin: 'whyGreen', dateFmt: 'yyyy年'})"  -->
      <!-- ,onpicked:function(){ipt_click(this,'d243')} -->
      <input type="text" id="wd_m" autocomplete="off" class="Wdate datebom" placeholder="请选择月" onclick="WdatePicker({ skin: 'whyGreen', dateFmt: 'MM月',onpicked:function(){mon_click(this,'wd_m')}})" />
      <input ID="wd_d" autocomplete="off" placeholder="请选择时间" type="text" class="Wdate datebom" onclick="WdatePicker({dateFmt:'MM-dd',onpicked:function(){day_click(this,'wd_d')}})" />
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .time{
    position: absolute;
    right: 0;
    top: 0;
    background: none;
    width: 300px;
    height: 50px;
    margin-top: 90px;
    margin-right: 50px;
  }
  .time div{
    /* width:42%; */
    float: left;
  }
  .time div:nth-child(2){
    width: 56%;
    float: right;
  }
  .time_check label{
    font-size: 14px;
    line-height: 20px;
    float: left;
    margin: 0 5px;
  }
  .time_input input{
    display: none;
    float: left;
    flex-grow: 1;
    border:1px solid #ffffff;
    background-color: #40a7fd;
    box-shadow:0px 0px 2px #3d3d3d inset;
    color:#fff;
    height: 26px;
    text-indent: 10px;
  } 
</style>