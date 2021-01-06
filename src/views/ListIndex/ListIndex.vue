<template>
  <div>
    <Header />
    <div class="top1" style="height: 130px;"></div>
    <div class="content">
      <div class="list">
        <router-link to="/project">
          <p>户用分布式并网光伏</p>
          <img src="./images/a1.png">
        </router-link>
        <!-- <a href="Gridpv_project.html">
          
        </a> -->
      </div>
      <div class="list">
        <a href="offGrid_project.html">
          <img src="./images/a2.png">
          <p class="list_r">离网光伏设计与仿真</p>
        </a>
      </div>
      <div class="list">
        <a href="Centpv_choose.html">
          <p>集中式光伏电站设计</p>
          <img src="./images/a3.png">
        </a>
      </div>
      <div class="list">
        <a href="SMG_choose.html">
          <img src="./images/a4.png">
          <p class="list_r">智能微电网设计与仿真</p>
        </a>
      </div>
      <!-- <div class="list list1">
        <p>储能电站设计与仿真</p>
        <img src="images/储能电站设计与仿真.png">
      </div>
      <div class="list list1">
        <img src="images/区域能源规划与仿真.png">
        <p class="list_r">区域能源规划与仿真</p>
      </div> -->
    </div>
    <div class="top1" style="height: 130px;"></div>
    <Footer />  
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import Footer from '../../components/Footer/Footer'
  export default {
    components:{
      Header,Footer
    },
  }
</script>

<style scoped>
  .content{
    width: 1500px;
    color:#fff;
  }
  .list{
    width: 740px;
    height: 385px;
    margin-right: 20px;
    margin-bottom:20px;
    float: left;
    display:flex;
    flex-direction: row;
    background: rgba(107, 188, 255, 0.5);
  }
  .list:nth-child(2n){
    margin-right: 0;
  }
  .list p{
    width: 110px;
    float: left;
    background: rgba(255,255,255,0.4);
    writing-mode:vertical-lr;
    height: 100%;
    text-align: center;
    line-height: 110px;
    color: #40a7fd;
    letter-spacing: 5px;
    font-size: 26px;
    font-weight: bold;
  }
  .list img{
    display: block;
    float: left;
    flex-grow: 1;
  }
  .list:hover{
    background: #6bbcff;
    box-shadow:10px 10px 20px #008bff;
  }
  .list:hover p{
    background-color: #fff;

  }
</style>