<template>
  <div id="app">
    <!-- <router-view :key="key"></router-view> -->
    <router-view/>
  </div>
</template>
<script>
  import './assets/style/css.css'
  import Login from './views/Login/Login'
  export default {
    created () {
      //在页面加载时读取sessionStorage里的状态信息
      if (localStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("store"))))
      } 

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
        localStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    },
    data() {
      return {
        appKey: 1
      }
    },
    components:{
      Login
    },
    computed:{
      key(){
   			return this.$route.path + Math.random()
   		}
	  }
  }
</script>  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app>div{
  overflow-y: hidden;
  width: fit-content;
  margin: auto;
}

.content{
  margin: auto;
  color: #fff;
}
#app::after{
  clear:both;content:'';display:block;width:0;height:0;visibility:hidden;
}
</style>
