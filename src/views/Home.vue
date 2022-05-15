<template>
  <div class="home">
    <div class="flex items-center justify-center">
        <img class="w-40 h-40" alt="Vue logo" src="../assets/logo.png" />
    </div>
    
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div class="text-komabig">小马大字体</div>
    <div class="bg-bootstrap_primary text-white">像我么</div>
    <div class="bg-bootstrap_success text-white">像我么</div>
    <div class="bg-bootstrap_info text-white">像我么</div>
    <div class="bg-red-600 h-screen"></div>
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
