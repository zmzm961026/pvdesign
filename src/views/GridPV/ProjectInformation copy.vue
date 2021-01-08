<template>
  <div>
    <Header />
    <div class="top1" style="height: 130px;"></div>

    <div class="top1" style="height: 130px;"></div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import Footer from '../../components/Footer/Footer'
  import ProjectHeader from '../../components/Project/ProjectHeader'
  export default {
    components:{
      Header,Footer,ProjectHeader
    },
  }
</script>

<style scoped>
  
</style>