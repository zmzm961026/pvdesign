<template>
  <div class="pro_list">
    <h5>项目列表</h5>
    <table id="pro_list" class="pro_list_con">
      <tr><th>名称</th><th>创建时间</th><th>完成时间</th><th>操作</th></tr>
    </table>
    <!-- <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="创建时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="完成时间">
    </el-table-column>
    <el-table-column
      label="操作">
    </el-table-column>
  </el-table> -->
    <div style="text-align: center;margin:20px auto;">
      <div id="pager" class="pager clearfix">
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState,mapActions,mapGetters,mapMutations } from "vuex";
  export default {
    data() {
      return {
        page: 1,    // 项目名称
        ProCode: '',    // 项目编号
        Cre: '',        // 设计方
        Inve: '',       // 投资方
        StarTime: '',   // 创建时间
        EndTime: '',    // 完成时间
      }
    },
    mounted () {
      // reqGridPVProjectList;
      const result = this.$store.dispatch('getProdata',{userID:this.userID,page:this.page});
      console.log(result)
    },
    computed: {
      ...mapState(['userID'])
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