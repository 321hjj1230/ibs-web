<template>
  <el-row :gutter="20" style="margin-left: 1.5rem">
    <el-col :span="1"></el-col>
    <el-col :span="5">
      <el-date-picker
        v-model="form.date1"
        type="date"
        placeholder="开始时间"
        style="margin-top: -5px"
      />
    </el-col>
    <el-col :span="2" class="text-center">
      <span class="text-gray-500" style="position: relative; margin-left: 30px"
        >--</span
      >
    </el-col>
    <el-col :span="5">
      <el-date-picker
        v-model="form.date2"
        placeholder="结束时间"
        style="margin-top: -5px"
      />
    </el-col>
    <el-col :span="7">
      <el-button
        size="large"
        type="primary"
        style="margin-left: 1%; margin-top: -8px"
        >搜索 (search)
      </el-button></el-col
    >
  </el-row>
  <div class="demo-collapse" style="margin: 2rem">
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
      v-for="index in tableData"
      :key="index.id"
      accordion
    >
      <el-collapse-item
        :title="index.name"
        :name="index.id"
        style="text-align: left"
      >
        <template #title>
          <span style="font-size: 1rem; text-align: left;margin-left: 1rem;width: 30px;"> {{ index.id }} </span>
          <h1 style="font-size: 1rem;font-weight: 500;text-align: left;margin-left: 1rem;width: 70%;max-width: 70%;"> {{ index.name }} </h1>
          <span style="font-size: 0.9rem;text-align: left;margin-left: 1rem;"> {{ index.date }} </span>
        </template>
        <p style="text-align: left;margin-left: 2rem;margin-top: 1.5rem;font-size: 0.9rem;width: 90%;"> &nbsp;&nbsp;&nbsp;&nbsp;{{ index.address }} </p>
      </el-collapse-item>
    </el-collapse>
  </div>

  <div class="tabListPage" style="margin-left: 8rem">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="state.currentPage"
      :page-sizes="state.pageSizes"
      :page-size="state.PageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="state.totalCount"
    >
    </el-pagination>
  </div>
</template>
  
  <script setup>
import { reactive, ref, onMounted, toRefs, computed } from "vue";
import { Search } from "@element-plus/icons-vue";
import { InfoFilled } from "@element-plus/icons-vue";
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!");
};
const activeNames = ref(["1"]);
const handleChange = (val) => {
  console.log(val);
};

const state = reactive({
  // 默认显示第几页
  currentPage: 1,
  // 总条数，根据接口获取数据长度(注意：这里不能为空)
  totalCount: 200,
  // 个数选择器（可修改）
  pageSizes: [6, 12, 24, 48],
  // 默认每页显示的条数（可修改）
  PageSize: 6,
});
//标题小于30个字符
const tableData = [
  {
    id: 1,
    date: "2016-05-03",
    name: "一一一一一一一一一一一一一一一一一一一一",
    address: "No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles ",
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 5,
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 6,
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 7,
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 8,
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 9,
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 10,
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const handleSizeChange = (val) => {
  // 改变每页显示的条数
  state.PageSize = val;
  // 注意：在改变每页显示的条数时，要将页码显示到第一页
  state.currentPage = 1;
};
// 显示第几页
const handleCurrentChange = (val) => {
  // 改变默认的页数
  state.currentPage = val;
};
const currentDate = ref(new Date());
const input1 = ref("");
</script>