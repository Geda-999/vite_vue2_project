<template>
  <div class="home">
    <div class="flex justify-center items-center">
        <img alt="Vue logo" src="../assets/logo.png" />
    </div>
  
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="text-komabig">小马大字体</div>
    <div class="bg-bootstrap_primary text-white">像我么</div>
    <div class="bg-bootstrap_success text-white">像我么</div>
    <div class="bg-bootstrap_danger text-white">像我么</div>
    <div class="bg-bootstrap_info text-white">像我么</div>
    <div class="bg-red-600 h-screen"></div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
