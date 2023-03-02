<template>
    <el-table :data="tableData" border style="width: 100%;margin: 2rem;">
      <el-table-column prop="id" label="ID" width="180" />

      <el-table-column prop="date" label="种类" width="180" />
      <el-table-column prop="name" label="包含食物类型" width="400" />
      <el-table-column prop="address" label="更新时间" />
    </el-table>
  </template>
  
  <script setup>
  const tableData = [
    {
      id:1,
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id:1,

      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id:1,

      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id:1,

      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  </script>