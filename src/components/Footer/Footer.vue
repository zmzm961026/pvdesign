<template>
  <div>北京海瑞克科技发展有限公司</div>
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
  div{
    background: #fff;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 55px;
    line-height: 55px;
    z-index: 10000;
    text-align: center;
    color: #40a7fd;
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: bold;left: 0;
  }
</style>
