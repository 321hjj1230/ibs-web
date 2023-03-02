<template>
  <div class="app">    
      <!-- 将获取到的数据进行计算 -->   
      <el-table :data="tableData.slice((state.currentPage-1)*state.PageSize,state.currentPage*state.PageSize)" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>

      
       <div class="tabListPage">
            <el-pagination @size-change="handleSizeChange" 
                           @current-change="handleCurrentChange" 
                           :current-page="state.currentPage" 
                           :page-sizes="state.pageSizes" 
                           :page-size="state.PageSize" layout="total, sizes, prev, pager, next, jumper" 
                           :total="state.totalCount">
              </el-pagination>
        </div>
 </div>
 </template>
 <script setup>
 import { reactive, ref, onMounted, toRefs, computed } from "vue";

 const state = reactive({
            // 默认显示第几页
            currentPage:1,
            // 总条数，根据接口获取数据长度(注意：这里不能为空)
            totalCount:200,
            // 个数选择器（可修改）
            pageSizes:[1,2,3,4],
            // 默认每页显示的条数（可修改）
            PageSize:1,
});
 const tableData=[ {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },];

  const handleSizeChange=(val)=> {
            // 改变每页显示的条数 
            state.PageSize=val
            // 注意：在改变每页显示的条数时，要将页码显示到第一页
            state.currentPage=1
        };
          // 显示第几页
      const handleCurrentChange=(val)=> {
            // 改变默认的页数
            state.currentPage=val
        };
 </script>