<template>
  <div class="top">
    <div class="top_con">
      <div>
        <img class="logo" src="./images/logo.png" />
        <h4>光伏发电设计与仿真</h4>
      </div>
      <div>
        <img src="./images/user.png" />
        <p id="user"></p>
        <img id="loginout" src="./images/close.png" />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top{
    background: #ffffff;
    width: 100%;
    height:80px;
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 10000;
  }
  .top_con{
    width: 1500px;
    margin: auto;
  }
  .top_con>div:nth-child(2){
    float: right;
    margin-top: 38px;
    margin-right: 150px;
  }
  .top_con img{
    float: left;
  }
  .top_con img.logo{
    margin-left: 150px;
  }
  .top_con h4{
    float: left;
    font-size: 28px;
    color: #40a7fd;
    height: 80px;
    line-height: 90px;
    margin-left: 5px;font-weight: bold;
    letter-spacing: 2px;
  }
  .top_con p{
    color:#40a7fd;
    float: left;
    line-height: 23px;
    margin:0 10px;
  }
  @media screen and (max-width: 1340px) {
    .top_con{
      width: 100%;
    }
    .top_con>div:nth-child(2){
      margin-right: 0;
    }
  }
</style>
