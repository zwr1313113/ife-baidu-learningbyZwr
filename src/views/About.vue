<template>
  <div id="app">
    <h1 class="front-font">前端学院
      <div class="bar"></div>
    </h1>
    <button
      @click="changeStyle"
      class="click-btn"
    >切换样式</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      action1: "",
      action2: "",
      flag: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    changeStyle() {
      if (this.flag) {
        this.action2.className = "front-font-active front-font";
        this.action3.className = "bar after";
      } else {
        this.action2.className = "front-font";
        this.action3.className = "bar";
      }
      this.flag = !this.flag;
    },
  },
  mounted() {
    this.action1 = document.getElementsByClassName("click-btn")[0];
    this.action2 = document.getElementsByClassName("front-font")[0];
    this.action3 = document.getElementsByClassName("bar")[0];
  },
};
</script>
<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
.front-font {
  display: inline-block;
  padding: 20px;
  color: black;
  transition: all 0.3s;
  -moz-transition: all 0.3s; /* Firefox 4 */
  -webkit-transition: all 0.3s; /* Safari and Chrome */
  -o-transition: all 0.3s; /* Opera */
}
.front-font-active {
  color: #008cf5;
}
.bar {
  background-color: #008cf5;
  margin-top: 10px;
  margin: 0 auto;
  height: 5px;
  width: 0;
  transition: width 1s;
  -moz-transition: width 1s; /*Fiexfox4*/
  -webkit-transition: width 1s; /*Safari, Chrome*/
  -o-transition: width 1s; /*Opera*/
}
.bar.after {
  margin-top: 10px;
  width: 100%;
  margin: 0 auto;
}
.click-btn {
  width: fit-content;
  margin: 0 auto;
}
</style>
