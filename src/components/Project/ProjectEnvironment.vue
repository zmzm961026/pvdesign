<template>
  <div class="line">
    <div>
      <p>温度</p>
      <div id="main1" class="zxt" style="background:none;width: 100%;"></div>
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
    </div>
    <div>
      <p>辐照度</p>
      <div id="main2" class="zxt" style="background:none;width: 100%;"></div>
      <div class="time">
        <div id="time2" class="time_check">
          <label onclick="city(tab('city').options[tab('city').selectedIndex].getAttribute('id'))"><input name="fz_time" type="radio" class="tui-checkbox" value="" checked />年</label>
          <label><input name="fz_time" type="radio" class="tui-checkbox" value="" />月</label>
          <label><input name="fz_time" type="radio" class="tui-checkbox" value="" />日</label>
        </div>
        <div id="time_input2" class="time_input">
          <input type="text" id="fz_y" autocomplete="off" class="Wdate datebom"  style="display: block;border:1px solid #40a7fd;box-shadow:0 0 0; background: none;"/>
          <!--  onclick="WdatePicker({ maxDate: '%y-%M-%d', skin: 'whyGreen', dateFmt: 'yyyy年'})"  -->
          <!-- ,onpicked:function(){ipt_click(this,'d243')} -->
          <input type="text" id="fz_m" autocomplete="off" class="Wdate datebom" placeholder="请选择月" onclick="WdatePicker({  skin: 'whyGreen', dateFmt: 'MM月',onpicked:function(){mon_click(this,'fz_m')}})" />
          <input ID="fz_d" autocomplete="off" placeholder="请选择时间" type="text" class="Wdate datebom" onclick="WdatePicker({dateFmt:'MM-dd',onpicked:function(){day_click(this,'fz_d')}})" />
        </div>
      </div>
    </div>
    <div>
      <p>风速</p>
      <div id="main3" class="zxt"  style="background:none;width: 100%;"></div>
      <div class="time">
        <div id="time3" class="time_check">
          <label onclick="city(tab('city').options[tab('city').selectedIndex].getAttribute('id'))"><input name="fs_time" type="radio" class="tui-checkbox" value="" checked />年</label>
          <label><input name="fs_time" type="radio" class="tui-checkbox" value="" />月</label>
          <label><input name="fs_time" type="radio" class="tui-checkbox" value="" />日</label>
        </div>
        <div id="time_input3" class="time_input">
          <input type="text" id="fs_y" autocomplete="off" class="Wdate datebom"  style="display: block;border:1px solid #40a7fd;box-shadow:0 0 0; background: none;"/>
          <!--  onclick="WdatePicker({ maxDate: '%y-%M-%d', skin: 'whyGreen', dateFmt: 'yyyy年'})"  -->
          <!-- ,onpicked:function(){ipt_click(this,'d243')} -->
          <input type="text" id="fs_m" autocomplete="off" class="Wdate datebom" placeholder="请选择月" onclick="WdatePicker({ skin: 'whyGreen', dateFmt: 'MM月',onpicked:function(){mon_click(this,'fs_m')}})" />
          <input ID="fs_d" autocomplete="off" placeholder="请选择时间" type="text" class="Wdate datebom" onclick="WdatePicker({dateFmt:'MM-dd',onpicked:function(){day_click(this,'fs_d')}})" />
        </div>
      </div>
    </div>
    <div>
      <p>湿度</p>
      <div id="main4" class="zxt" style="background:none;width: 100%;"></div>
      <div class="time">
        <div id="time4" class="time_check">
          <label onclick="city(tab('city').options[tab('city').selectedIndex].getAttribute('id'))"><input name="sd_time" type="radio" class="tui-checkbox" value="" checked />年</label>
          <label><input name="sd_time" type="radio" class="tui-checkbox" value="" />月</label>
          <label><input name="sd_time" type="radio" class="tui-checkbox" value="" />日</label>
        </div>
        <div id="time_input4" class="time_input">
          <input type="text" id="sd_y" autocomplete="off" class="Wdate datebom"  style="display: block;border:1px solid #40a7fd;box-shadow:0 0 0; background: none;" onclick=""/>
          <!--  onclick="WdatePicker({ maxDate: '%y-%M-%d', skin: 'whyGreen', dateFmt: 'yyyy年'})"  -->
          <!-- ,onpicked:function(){ipt_click(this,'d243')} -->
          <input type="text" id="sd_m" autocomplete="off" class="Wdate datebom" placeholder="请选择月" onclick="WdatePicker({ skin: 'whyGreen', dateFmt: 'MM月',onpicked:function(){mon_click(this,'sd_m')}})" />
          <input ID="sd_d" autocomplete="off" placeholder="请选择时间" type="text" class="Wdate datebom" onclick="WdatePicker({dateFmt:'MM-dd',onpicked:function(){day_click(this,'sd_d')}})" />
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  export default {
    props: {
      environmentList:{},
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