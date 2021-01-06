<template>
  <div>
    <Header />
    <div class="top1" style="height: 130px;"></div>
    <div class="content">
      <h1>您好！<span>欢迎进入光伏发电设计与仿真教师端</span></h1>
      <div class="clear"></div>
      <div class="list listStu">
        <div>
          <h4>学生管理</h4>
          <p>主要用于学生信息管理，总体任务是实现学生信息关系的系统化、科学化、规范化和自动化，其主要任务是用计算机对学生各种信息进行日常管理，如修改、删除等。</p>
          <div class="divHover">
            <a class="lista" @click="ulHover(0)">
              <img src="./images/t20.png" alt="">
              <span>学生管理</span>
            </a>
            <transition name="fade">
              <ul class="listul" v-show="ulIndex==0">
                <a href="TeacherSAM.html">
                  <img src="./images/t15.png" alt="">
                  <li>账号管理</li>
                </a>
                <a style="float: left;margin-top: 10px;" href="TeacherSPM.html">
                  <img src="./images/t16.png" alt="">
                  <li>项目管理</li>
                </a>
              </ul>
            </transition>
          </div>
          <img src="./images/学生管理.png" alt="">
        </div>
      </div>
      <div class="list listTest">
        <div>
          <h4>考试管理</h4>
          <p>主要用于考试管理、题库管理、评分、成绩收集、成绩查询统计分析，实现考务、考试的自动化、无纸化。</p>
          <div class="divHover">
            <a class="lista" style="display: block;" @click="ulHover(1)">
              <img src="./images/t21.png" alt="">
              <span>考试管理</span>
            </a>
            <transition name="fade">
              <ul class="listul" style="margin-top: -16px;" v-show="ulIndex==1">
                <a href="TeacherTQL.html">
                  <img src="./images/t17.png" alt="">
                  <li>题库管理</li>
                </a>
                <a href="TeacherTPL.html">
                  <img src="./images/t18.png" alt="">
                  <li>考卷管理</li>
                </a>
                <a href="TeacherTTL.html">
                  <img src="./images/t19.png" alt="">
                  <li>考试管理</li>
                </a>
              </ul>
            </transition>
          </div>
          <img src="../../assets/images/考试管理.png" alt="">
        </div>
      </div>
      <div class="list listDes">
        <div>
          <h4>设计</h4>
          <p>本软件的主体功能包括气象数据分析、电气结构设计、设备选型与匹配、运行与控制策略设计、仿真数据分析五个部分，经过全流程设计与仿真之后，使用者可以从宏观和微观两个维度理解光伏电站的技术与经济评价。</p>
          <div class="divHover1">
            <a @click="ulHover(2)">
              <img src="./images/t25.png" alt="">
              <span>点击进入</span>
            </a>
          </div>
          <img src="../../assets/images/设计.png" alt="">
        </div>
      </div>
      <div class="list">
        <div>
          <h4 style="text-align: center;">光伏发电设计与仿真</h4>
          <img src="../../assets/images/光伏发电系统设计.png" alt="" style="position: static;margin: auto;display: block;">
        </div>
      </div>
      <div class="clear"></div>
    </div>
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
    data() {
      return {
        ulIndex: -1
      }
    },
    methods: {
      ulHover(index) {
        if(index===2){
          this.$router.push('/listIndex')
        }
        this.ulIndex = index;
      }
    },
  }
</script>

<style scoped>
  .content{
    width: 1070px;
    height: auto;
    color:#fff;
   margin-bottom: 78px;}
  .content h1{
    color: #4242ff;
    float: left;
    font-size: 32px;
    line-height: 52px;
    width: 100%;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .content h1 span{
    font-weight: 700;
    font-size: 24px;color: #fff;
  }
  .list{
    width: calc(50% - 85px);
    height: 240px;
    float: left;
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 50px;
    position: relative;
  }
  .list:nth-child(2n){
    float: right;
  }
  .list>div{
    height: 100%;
  }
  .listStu{
    background: -webkit-linear-gradient(#ff9a26, #ffdcb3); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#ff9a26, #ffdcb3);  /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#ff9a26, #ffdcb3);  /* Firefox 3.6 - 15 */
    background: linear-gradient(#ff9a26, #ffdcb3);  /* 标准的语法 */
  }
  .listTest{
    background: -webkit-linear-gradient(#87dd2a, #daffb3); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#87dd2a, #daffb3);  /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#87dd2a, #daffb3);  /* Firefox 3.6 - 15 */
    background: linear-gradient(#87dd2a, #daffb3);  /* 标准的语法 */
  }
  .listDes{
    background: -webkit-linear-gradient(#1c98ff, #8acaff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#1c98ff, #8acaff);  /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#1c98ff, #8acaff);  /* Firefox 3.6 - 15 */
    background: linear-gradient(#1c98ff, #8acaff);  /* 标准的语法 */
  }
  .list:nth-child(6){
    background: -webkit-linear-gradient(#4040ff, #9f9fff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#4040ff, #9f9fff);  /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#4040ff, #9f9fff);  /* Firefox 3.6 - 15 */
    background: linear-gradient(#4040ff, #9f9fff);  /* 标准的语法 */
  }
  /* .listStu:hover{
    box-shadow: 6px 6px 12px #ffc37f;
  }
  .listTest:hover{
    box-shadow: 6px 6px 12px #b1ee6f;
  }
  .listDes:hover{
    box-shadow: 6px 6px 12px #62b8ff;
  } */
  /* .list:nth-child(6):hover{
    box-shadow: 6px 6px 12px #6c6cff;
  } */
  .list>div>div{
    position: absolute;
    bottom: 30px;
    left: 30px;
    height: 80px;
    z-index: 1;
    /* overflow: hidden; */
  }
  .list>div>div ul{
    background-position: 0 0;
    /* padding: 15px 0 10px 0; */
    width: calc(100% - 80px);
    background-size: 100% 100%;
    float: left;
  }
  .list>div>div ul.hover{
    animation: 2s opacity2 0s infinite; -webkit-animation: 2s opacity2 0s infinite;-moz-animation: 2s opacity2 0s infinite;
  }
  .fade-enter-active, .fade-leave-active{
    transition:opacity .2s
  }
      
  .fade-enter, .fade-leave-to{
    opacity:0
  }
    
  @keyframes opacity2{
    0%{opacity:0}
    50%{opacity:.5;}
    100%{opacity:1;}
  }
  @-webkit-keyframes opacity2{
    0%{opacity:0}
    50%{opacity:.5;}
    100%{opacity:1;}
  }
  @-moz-keyframes opacity2{
    0%{opacity:0}
    50%{opacity:.5;}
    100%{opacity:1;}
  }
  .list>div>div ul li{
    line-height: 32px;
    color: #fff;
    text-align: center;
    display: none;
    margin-left: 8px;
  }

  .listStu ul a:hover img,.listStu ul a.hover img{
    border: 2px solid #ff9a26;
    background: #ff9a26;
  }
  .listTest ul a:hover img,.listTest ul a.hover img{
    border: 2px solid #87dd2a;
    background: #87dd2a;
  }
  .list h4{
    height: 36px;font-size: 20px;
  }
  .list p{
    line-height: 32px;
  }
  .divHover{
    width: 50%;
  }
  .divHover>a,.list1 a{
    width: 80px;
    height: 80px;  
    background-color: #fff;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;float: left;
  }
  .divHover>a>img,.list1 a img{
    margin-top: 8px;
  }
  .divHover ul a{
    display: flex;
    width: 74%;
  }
  .divHover ul a img{
    border: 2px solid #fff;
    background:none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
  .divHover ul a:nth-child(2){
    text-align: right;
    float: right;
  }
  .list span{
    text-align: center;
    background: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
    border: none;
    display: block;
    line-height: 26px;
  }

  .listDes span{
    color: #1c98ff;
  }
  .listTest span{
    color: #87dd2a;
  }
  .listStu span{
    color: #ff9a26;
  }
  .divHover>a:hover,.divHover>a.hover,.divHover1>a:hover{
    box-shadow:0px 0px 8px #c7c7c7;
  }
  .list>div>img{
    position: absolute;
    bottom: 30px;
    right: 30px;
  }   
  .divHover1>a{
    width: 80px;
    height: 80px;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    float: left;
  }
  .divHover1>a>img {
    margin-top: 8px;
  }
</style>