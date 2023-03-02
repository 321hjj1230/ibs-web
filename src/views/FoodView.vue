<template>

  <div style="width: 80%; margin-left: 7%">
    <el-row :gutter="20">
      <el-col :span="3">
        <el-affix :offset="73">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <span style="margin-left: 1px">食物列表</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span style="margin-left: 1px">食物种类</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span style="margin-left: 1px">数据申报</span>
          </el-menu-item>
        </el-menu>
      </el-affix>
      </el-col>
      <el-col :span="21" style="min-height: 40rem; max-height: 50rem">
        <div v-if="state.page === 1">

          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
            lazy
          >
            <el-tab-pane label="全部" name="all"
              ><foodlist Text="全部"></foodlist
            ></el-tab-pane>

            <el-tab-pane label="米饭" name="rice" lazy
              ><foodlist></foodlist
            ></el-tab-pane>
            <el-tab-pane label="肉类" name="meat" lazy
              ><foodlist></foodlist
            ></el-tab-pane>
            <el-tab-pane label="饮料" name="juice" lazy
              ><foodlist></foodlist
            ></el-tab-pane>
            <el-tab-pane label="水果" name="friut" lazy
              ><foodlist></foodlist
            ></el-tab-pane>
          </el-tabs>
        </div>
        <div v-else-if="state.page == 2">
          <foodsort></foodsort>
        </div>
        <div v-else><foodchange></foodchange></div>
      </el-col>
    </el-row>
  </div>
  <endline></endline>
</template>

<script setup>
import { reactive, ref, onMounted, toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import foodlist from "@/components/food/foodlist.vue";
import foodchange from "@/components/food/foodchange.vue";
import endline from "@/components/line/endline.vue";
import foodsort from "@/components/food/foodsort.vue";
// import { provide } from 'vue'
import store from "@/store/index.js";

const state = reactive({
  page: 1,
  value: "",
  sort: [
    {
      name: "米饭",
    },
    {
      name: "米饭",
    },
    {
      name: "米饭",
    },
  ],
});
const activeIndex = ref("1");

const activeName = ref("all");

const handleClick = (tab, event) => {
  console.log('标签页',tab.props.label,tab, event);
//provide传递test001的参数，值是987654321到子孙节点
store.state.Tablesort=tab.props.label
  
};
// provide('leixing', tab.props.label)

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
  switch (key) {
    case "1":
      state.page = 1;
      break;
    case "2":
      state.page = 2;
      break;
    case "3":
      state.page = 3;
      break;
  }

  console.log(state.page);
};


onMounted(() => {
  // activeName=store.state.activename
  store.state.apptitle='/food'
  console.log('导航：'+store.state.apptitle);
})
</script>

<style>
.el-tab-pane {
  text-align: center;
  font-weight: 400;
}
</style>