<template>
  <div class="content" style="overflow:inherit;text-align:left;margin-top: 13%;
    margin-left: 20%;">
    <p>欢迎进入</p>
    <h4>光伏发电设计与仿真</h4>
    <form @submit.prevent="login">
      <div class="xuehao">
        <p>用户名</p>
        <input id="user" type="text" autocomplete="off" placeholder="请输入账号" v-model="userName" />
      </div>
      <div class="xuehao">
        <p>密码</p>
        <input id="pass" type="password" autocomplete="off" placeholder="请输入密码"  v-model="password"/>
      </div>
      <button id="login" :class="{hover:userName&&password}" :disabled="!userName&&!password">登录</button>
    </form>
  </div>
</template>
<script>
  import {reqLogin} from '../../api'
  export default {
    data () {
      return {
        userName: '', // 用户名
        password: '', // 密码
        bodyBgImage: 'url(' + require('../../assets/images/login.png') + ')'
      }
    },
    mounted(){
      // 进来的时候调用添加
      this.setBodyBackGround()
    },
    methods: {
      setCookie(k, v) {
        var date = new Date((new Date()).getTime() + 3 * 60 * 60000);
        window.document.cookie = k + '=' + escape(v) + ';expires=' + date + "; path=/;";
      },
      async login() {
        const {userName, password} = this
        let result
        if(!this.userName) {
          // 用户名必须指定
          alert('用户名必须指定')
          return
        } else if(!this.password) {
          // 密码必须指定
          alert('密码必须指定')
          return
        }
        // 发送ajax请求密码登陆
        result = await reqLogin({userName, password})
        console.log(result)
        if (result.code == 20000) { 
          if(result.data.type=='教师'){
            this.setCookie('teacherId', result.data.fzuserintro.id);
            this.setCookie('teacherName', result.data.fzuserintro.userName);
            this.setCookie('userId', result.data.fzuserintro.id);
            this.setCookie('userName', result.data.fzuserintro.userName);
            this.$store.dispatch('recordUser', {teacherId: result.data.fzuserintro.id,teacherName: result.data.fzuserintro.userName,userId:result.data.fzuserintro.id});
            this.$router.push('/teacherEnd')
          }else{
            this.setCookie('userId', result.data.fzuserintro.id);
            this.setCookie('userName', result.data.fzuserintro.userName);
            this.$store.dispatch('recordUser', {userId: result.data.fzuserintro.id,userName: result.data.fzuserintro.userName})
            this.$router.push('/studentsEnd')
          }
        } else {
          alert(result.message);
          this.userName='';
          this.password='';
        }
      },
      // 添加body图片
      setBodyBackGround () {
        document.body.style.backgroundImage = this.bodyBgImage;
        document.body.style.backgroundSize = '100% 100%';

      },
       // 清除背景图
      clearBodyBackGround () {
        document.body.style.backgroundImage = '';
        document.body.style.backgroundSize='cover';
      }
    },
    beforeDestroy(){
      // 离开页面的时候清除
      this.clearBodyBackGround()
    }
  }
</script>
<style scoped>
  .content{
    width: 300px;
    
    float: left;
  }
  .content>p{
    color: #5072e1;
    font-size: 20px;
    line-height: 30px;
  }
  .content>h4{
    color: #5072e1;
    line-height: 50px;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .xuehao{
    width: 100%;
    height: 85px;
  }
  .xuehao:nth-child(2n){
    margin-right: 0;
  }
  .xuehao p{color: #5072e1;width:100%;height:30px;letter-spacing:1px;font-size:16px;}
  .xuehao input{width:212px;height:30px;line-height:30px;font-size:12px;margin:0px;background:rgba(0,0,0,0);outline:none !important;border-bottom:1px solid #d4dbe4;text-indent:10px;color: #5072e1;}
  button{
    display: block;
    background-color:#ccc;
    width: 140px;
    height: 40px;
    border-radius: 18px;
    color:#ffffff;
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    cursor: no-drop;
    letter-spacing: 2px;
  }
  button.hover{
    background-color:#40a7fd;
    color:#ffffff;
    box-shadow:8px 8px 16px #008bff;
    cursor: pointer;
  }
</style>