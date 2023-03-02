<template>
    <el-row :gutter="0" style="width: 22rem;">
        <el-col :span="1">
  <el-dropdown @command="handleCommand">
    <el-avatar
      style="width: 3rem; height: 3rem"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a">个人主页</el-dropdown-item>
        <el-dropdown-item command="b">个人资料</el-dropdown-item>
        <el-dropdown-item command="c">个人日志</el-dropdown-item>
        <el-dropdown-item command="d">用户设置</el-dropdown-item>
        <el-dropdown-item command="e" divided>系统设置</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown></el-col>
  <el-col :span="19" style="margin-top: 1rem;margin-left: 1rem;">
    <el-button
    size="large"
      v-for="index in list"
      :key="index"
      type="primary"
      link
      style="position: relative; margin-left: 1.8rem; font-size: 1rem;width: 43px;"

      >
      <div v-if="index.name==='消息'">{{ index.name }}
        <div v-if="x===0"></div>
        <div v-else>        <div style="background-color: coral;width: 10px;height: 10px;border-radius: 5px;position: absolute; margin-left: 30px;margin-top: -20px;"></div>
</div>
      </div>
      <div v-else>{{ index.name }}</div>
</el-button
    >

</el-col>
</el-row>
</template>
  
  <script setup>
import { ElMessage } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";

const handleCommand = (command) => {
  ElMessage(`click on item ${command}`);
};
const list=[{
    name:"主页",
    path:"",
},{
    name:"消息",
    path:"",
},{
    name:"收藏",
    path:"",
},]

const x=1
</script>
  <style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>