<template>
  <div class="pro_list">
    <h5>项目列表</h5>
    <table id="pro_list" class="pro_list_con">
      <tr>
        <th>名称</th>
        <th>创建时间</th>
        <th>完成时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in proAlldata" :key="index">
        <th>{{item.projectName}}</th>
        <th>{{item.crantionTime | dateFormat}}</th>
        <th>{{item.completionTime | dateFormat}}</th>
        <th>
          <button class="open" @click="open(item.id)">打开</button>
          <!-- <el-tag @click="open(id)">打开</el-tag>
          <el-tag type="danger"  @click="del(id)">删除</el-tag> -->
          <!-- 删除事件 -->
          <el-popconfirm
            :hide-icon="true" @confirm="del(item.id)"
            title="是否确认删除项目，操作不可恢复"
          >
            <el-button slot="reference" style="padding:0">删除</el-button>
          </el-popconfirm>
        </th>
      </tr>
    </table>
    <!-- 使用elementui写的列表 -->
    <!-- <el-table
    :data="proAlldata"  class="pro_list_con"
    stripe
    style="width: 100%;text-align:center;">
      <el-table-column
        prop="projectName"
        label="名称"
        width="100">
      </el-table-column>
      <el-table-column  label="创建时间" width="200" prop="crantionTime">  -->
        <!-- vue中，添加事件过滤器的方式：作用域插槽 -->
        <!-- <template slot-scope="scope">
          {{scope.row.crantionTime | dateFormat}}
        </template>
      </el-table-column>
      <el-table-column
        prop="completionTime" width="200"
        label="完成时间">
        <template slot-scope="scope">
          {{scope.row.completionTime | dateFormat}}
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <button class="open" data_id="'+value.id+'" >打开</button>
        <button data_id="'+value.id+'" class="del">删除</button>

        <el-tag type="danger"  @click="del(id)">删除</el-tag>
      </el-table-column>
    </el-table> -->
    <div style="text-align: center;margin:20px auto;">
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="proPage*8"
          :page-size="pagesize"
          >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    reqGridProjectList,
    delProject
  } from '../../api/index'
  import { mapState,mapActions,mapGetters,mapMutations } from "vuex";
  export default {
    data() {
      return {
        page: 1,    // 当前页数
        proAlldata: [],  //项目列表
        proPage: 0,   //项目页数
        pagesize:8,   //每页显示几条数据
      }
    },
    computed: {
      ...mapState(['userID'])
    },
    mounted () {
      this.getAllPro();
      // this.$store.dispatch('getAllProdata',{userID:this.userID,page:this.page});
    },
    methods: {
      async getAllPro() {
        const result = await reqGridProjectList({userID:this.userID,page:this.page});
        this.proAlldata = result.项目名称;
        this.proPage = result.总页数;
        // console.log(result,this.proAlldata,{userID:this.userID,page:this.page})
      },
      //   监听pagesize改变
      handleSizeChange(newSize){
        this.queryInfo.pagesize = newSize;
        this.getAllPro()
      },
        //    监听页码值改变
      handleCurrentChange(newPage) {
        this.page=newPage;
        this.getAllPro()    
      },
      async open(Pid){
        this.$store.dispatch('recordProID',{proID:Pid})
        this.$router.push('/projectInformation')
      },
      async del(Pid){
        console.log('删除'+Pid+'成功');
        const result = await delProject({Pid:Pid});
        console.log(result)
        if(result) this.getAllPro()
        // const result = await reqGridProjectList({userID:this.userID,page:this.page});
      }
    },

  }
</script>

<style scoped>
  .pro_list h5{
    width: 100%;
    height: 57px;
    line-height: 57px;
    padding-top: 12px;
    font-size: 22px;
    color:#fff;
    text-align: center;
    letter-spacing: 2px;
  }

  .pro_list{
    width: 820px;
    height: 645px;
    float: right;
    box-shadow:0px 0px 20px #008bff;
    padding: 0 30px;
  }
  .pro_list_con{
    /* width: 100%; */
    padding:22px 30px;
  }
  table{
    width:100%;
    max-width:100%;
    border-collapse:collapse;
    border-spacing:0;
    text-align: center;
    color:#999999;
    margin-top: 22px;
    font-size: 14px;
  }
  table th{
    vertical-align:bottom;
  }
  table td{
    vertical-align:top;
  }

  table tr:nth-child(odd){
    background: #e7eef4;
    height: 40px;
    line-height: 40px;
  }
  table tr:nth-child(even){
    background: #ffffff;
    height: 40px;
    line-height: 40px;
  }
  table tr:nth-child(1){
    color:#333333;
    height: 70px;
    line-height: 70px;font-size: 16px;
  }
  table button{
    background-color: #eeeeee;
    border: 1px solid #cccccc;
    border-radius: 24px;
    width:50px;
    height: 24px;
    color:#999999;
    cursor: pointer;
    margin:0 3px;
  }
  table button:hover{
    background-color: #40a7fd;
    border: 1px solid #40a7fd;
    color: #ffffff;
  }
</style>