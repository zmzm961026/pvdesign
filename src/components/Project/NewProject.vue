<template>
  <div class="new_pro">
    <h5>新建项目</h5>
    <div class="new_list">
      <p>项目名称<i></i></p>
      <input type="text" autocomplete="off" placeholder="请输入项目名称" name="ProName" v-model="ProName"  />
    </div>
    <div class="new_list">
      <p>项目编号<i></i></p>
      <input type="text" autocomplete="off" placeholder="请输入项目编号" name="ProCode" v-model="ProCode" />
    </div>
    <div class="new_list">
      <p>设计单位<i></i></p>
      <input type="text" autocomplete="off" placeholder="请输入设计方" name="Cre" v-model="Cre" />
    </div>
    <div class="new_list">
      <p>投资方<i></i></p>
      <input type="text" autocomplete="off" placeholder="请输入投资方" name="Inve" v-model="Inve" />
    </div>
    <div class="new_list">
      <p>创建时间<i></i></p>
      <input id="StarTime" type="text" autocomplete="off" placeholder="请输入创建时间" name="StarTime"  class="Wdate datebom" onclick="WdatePicker({maxDate:'%y-%M-%d',dateFmt:'yyyy-MM-dd',onpicked:function(){EndTime.click();tab('StarTime').style.backgroundColor = '#fff';tab('StarTime').style.color = '#40a7fd';}})" v-model="StarTime" />
    </div>
    <div class="new_list">
      <p>完成时间<i></i></p>
      <input id="EndTime" type="text" autocomplete="off" placeholder="请输入完成时间" name="EndTime"  class="Wdate datebom" onclick="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'StarTime\')}',onpicked:function(){tab('EndTime').style.backgroundColor = '#fff';tab('EndTime').style.color = '#40a7fd';}})" v-model="EndTime" />
    </div>
    <div class="clear"></div>
    <button id="pro_save">保存</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ProName: '',    // 项目名称
        ProCode: '',    // 项目编号
        Cre: '',        // 设计方
        Inve: '',       // 投资方
        StarTime: '',   // 创建时间
        EndTime: '',    // 完成时间
      }
    },
  }
</script>

<style scoped>
.new_pro{
    width: 440px;
    height: 645px;
    box-shadow:0px 0px 20px #008bff;
    float: left;
  }
  .new_pro h5,.pro_list h5{
    width: 100%;
    height: 57px;
    line-height: 57px;
    padding-top: 12px;
    font-size: 22px;
    color:#fff;
    text-align: center;
    letter-spacing: 2px;
  }
  .new_list{
    height: 30px;
    padding:22px 30px;
    display:flex;
    flex-direction: row;
  }
  .new_list p{
    width: 70px;
    float: left; 
    color:#fff;
    line-height: 28px;
    text-align: justify;
    padding-right: 20px;
  }
  .new_list p i{ display:inline-block; /*padding-left: 100%;*/width:100%;}
  .new_list input{
    display: block;
    float: left;
    flex-grow: 1;
    border:1px solid #ffffff;
    background-color: #40a7fd;
    box-shadow:0px 0px 2px #3d3d3d inset;
    color:#fff;
    height: 26px;
    text-indent: 10px;
  }
  .new_list select{
    display: block;
    float: left;
    flex-grow: 1;
    border:1px solid #ffffff;
    background-color: #40a7fd;
    box-shadow:0px 0px 2px #3d3d3d inset;
    color:#fff;
    height: 26px;
    text-indent: 10px;
  }
  .new_pro button{
    display: block;
    width: 80px;
    height: 40px;
    border-radius: 18px;
    margin: auto;
    margin-top: 38px;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 2px;
    border: 1px solid #cccccc;
    color: #cccccc;
  }
  .new_pro button:hover{
    box-shadow:8px 8px 16px #008bff;
    color:#40a7fd;
    background-color: #ffffff;
  }
</style>