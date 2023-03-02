<template>
  <div class="demo-input-size">
    <el-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="  请输入 中文名 / English name"
      :suffix-icon="Search"
      style="margin-bottom: 12px; width: 60%; margin-left: -15%"
    />
    <el-button
      size="large"
      type="primary"
      style="margin-left: 1%; margin-bottom: 0.9rem"
      >搜索 (search)
    </el-button>
  </div>

  <el-table
    :data="tableData"
    stripe
    style="width: 100%"
    max-height="40.1rem"
    loading="lazy"
    size="large"
  >
    <el-table-column label="ID" width="60" fixed>
      <template #default="scope">
        {{ scope.row.id }}
      </template>
    </el-table-column>
    <el-table-column label="图片" width="100">
      <template #default="scope">
        <div class="demo-image__preview">
          <el-image
            style="width: 55px; height: 50px"
            :src="scope.row.pic"
            fit="cover"
            lazy

          />
          <!-- :preview-src-list="scope.row.piclist"
          :zoom-rate="1.2"
          :initial-index="80" -->
        </div>
      </template>
    </el-table-column>

    <el-table-column label="中文名" width="120">
      <template #default="scope">
        <el-popover
          effect="light"
          trigger="hover"
          placement="top"
          width="auto"
          style="text-align: center"
        >
          <template #default>
            <div>Chinese Name&nbsp; :&nbsp;&nbsp;&nbsp;{{ scope.row.chnia }}</div>
            <div>
              English Name&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;{{
                scope.row.english
              }}
            </div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.chnia }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="english" label="英文名" width="120" />
    <el-table-column prop="cate" label="分类" width="120" />
    <el-table-column prop="quantity" label="食用量" width="300" />
    <el-table-column prop="cate" label="食用量" width="120" />

    <el-table-column prop="cate" label="更新日期" width="120" />

    <el-table-column
      label="&nbsp&nbsp&nbsp&nbsp操作"
      width="160"
      style="text-align: center"
      fixed="right"
    >
      <template v-slot="scope">
        <el-button
          size="large"
          style="background-color: white; color: black; margin-left: 0.8rem"
          @click="handleEdit(scope.$index, scope.row)"
        >
          详情
        </el-button>
        <!-- <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            > -->
      </template>
    </el-table-column>
  </el-table>
</template>
  
<script>
import { Timer } from "@element-plus/icons-vue";
import {
  reactive,
  ref,
  onMounted,
  toRefs,
  computed,
  defineComponent,
} from "vue";
import { Search } from "@element-plus/icons-vue";
import store from "@/store";

export default {
  props: ["Text"],

  setup() {
    const loading = ref(false);

    const state = reactive({
      page: 1,
      value: "",
    });
    const handleEdit = (index, row) => {
      console.log(index, row);
    };
    const handleDelete = (index, row) => {
      console.log(index, row);
    };
    const activeName = ref("1");
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    const tableData = [
      {
        id: "1",
        pic: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        piclist: [
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        ],
        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "2",
        pic: require("@/assets/img/首页1.jpg"),
        piclist: [require("@/assets/img/首页1.jpg")],
        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "3",
        pic: "./src/assets/logo.png",
        piclist: ["./assets/logo.png"],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "4",
        chnia: "Tom",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],

        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],
        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],
        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],
        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: require("@/assets/logo.png"),
        piclist: [require("@/assets/logo.png")],
        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: "./src/assets/logo.png",
        piclist: ["./assets/logo.png"],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: "./src/assets/logo.png",
        piclist: ["./assets/logo.png"],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
      {
        id: "1",
        pic: "./src/assets/logo.png",
        piclist: ["./assets/logo.png"],

        chnia: "Tom",
        english: "California",
        cate: "Los Angeles",
        quantity: "No. 189, Grove St, Los Angeles",
      },
    ];
   
    onMounted(() => {
      console.log("类别： " + store.state.Tablesort);
      // if(Text==='全部'){

      // }
    });
    return {
      handleEdit,
      ...toRefs(state),
      loading,
      activeName,
      input1,
      tableData,
      Search,
    };
  },
};
</script>

<style scoped>
.example-showcase .el-loading-mask {
  z-index: 9;
}
body {
  margin: 0;
}

.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
