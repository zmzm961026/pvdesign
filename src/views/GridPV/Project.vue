<template>
  <div>
    <Header />
    <div class="top1" style="height: 130px;"></div>
    <div class="content">
      <div class="list_title">
        <h4 id="h_title">并网光伏—项目信息</h4>
        <span style="width: 226px;"></span>
      </div>
      <div class="list">
        <!-- 新建项目 -->
        <NewProject />
        <!-- 项目列表 -->
        <ProjectList/>
        <div class="clear"></div>
      </div>
      <div class="button" id="rBtn">
        <a href="index.html"><button>上一步</button></a>
        <button id="next">下一步</button>
        <a id="returnIndex" href="index.html"><button>返回首页</button></a>
        <!-- <button>确定</button> -->
      </div>
    </div>  
    <div class="top1" style="height: 130px;"></div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import Footer from '../../components/Footer/Footer'
  import NewProject from '../../components/Project/NewProject'
  import ProjectList from '../../components/Project/ProjectList'
  
  export default {
    components:{
      Header,Footer,NewProject,ProjectList
    },
  }
</script>

<style scoped>
  .content{
    width: 1340px;
    height: 870px;
    background: #40a7fd;
    border-radius: 17px;
    padding:67px 80px 0 80px;
  }
  .list{
    margin-top: 40px;
  }
  
  /* 弹窗样式 */
  #set{
    width:100%;
    height:100%;
    position:fixed;
    top:0px;
    left:0px;
    background:rgba(0,0,0,0.7);
    z-index:100000;
    /* display:none; */
    color:#f8fcff;
  }
  #set_con{
    width:90%;
    height: 84%;
    position:fixed;
    left:50%;
    top:8%;
    margin-left:-45%;
    color:#fff;
    background: #40a7fd;
    border-radius: 20px;
  }
  #close{
    width: 50px;
    height: 50px;
    background: url(../../assets/images/close1.png) no-repeat;
    background-size: 100%  100%;
    position: absolute;
    right: -50px;
    top: -50px;
    cursor: pointer;
  }
  /* 负载 */
  #set h2{
    margin-top: 50px;
    text-align: center;
    line-height: 50px;
    margin-bottom: 10px;
  }
  #set .new_list,#set .new_list1{
    margin: auto;
    width: 300px;
    padding: 15px 30px;
  }
  @media screen and (min-width: 1340px) {
    #set_con{
      width: 1200px;
      height: 622px;
      left: 50%;
      top: 50%;
      margin-left: -600px;
      margin-top: -311px;
    }
  }
</style>