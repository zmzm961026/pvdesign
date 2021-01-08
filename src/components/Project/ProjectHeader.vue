<template>
  <div>
    <div class="list_title">
      <h4 id="h_title">{{proType+hTitle}}</h4>
      <span :style="{width: hWidth}"></span>
    </div>
    <div class="list_name">
      <div>
        <p>项目名称：{{projectName}}</p>
      </div>
      <div>
        <p>设计单位：{{creator}}</p>
      </div>
      <div>
        <p>投资方：{{inverstor}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState,mapActions,mapGetters,mapMutations } from "vuex";
  export default {
    props: {
      hTitle: '',   //项目标题
      hWidth:'',     //黄色条的宽度
    },
    data() {
      return {
        projectName:'',     //项目名称
        creator:'',   //设计单位
        inverstor:'',    //投资方

      }
    },
    computed:{
      ...mapState(['proData','proType'])
    },
    mounted () {
      this.projectName=this.proData.info.info[0].projectName
      this.creator=this.proData.info.info[0].creator
      this.inverstor=this.proData.info.info[0].inverstor
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