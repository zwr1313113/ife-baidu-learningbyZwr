<template>
  <div class="home">
    <router-link to="/About">
      <h1>菜单动画效果</h1>
    </router-link>
    <router-link to="/2dTrans">
      <h1>CSS 2D 变形</h1>
    </router-link>
    <router-link to="/cat">
      <h1>猫猫笑脸(●'◡'●)</h1>
    </router-link>
    <router-link to="/3dTrans">
      <h1>卡片翻转</h1>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  }
};
</script>
