<template>
  <div>
    <div class="box0"></div>
    <div class="box0 box1"></div>
    <div class="box0 box2"></div>
    <div class="box0 box3"></div>
    <div class="box0 box4"></div>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box0 {
  width: 150px;
  height: 150px;
  border: 1px solid #dedede;
  background: #f3f2f2;
  margin: 20px auto;
}
.box1 {
  transform: skew(30deg, 0);
  -ms-transform: skew(30deg, 0); /* IE 9 */
  -moz-transform: skew(30deg, 0); /* Firefox */
  -webkit-transform: skew(30deg, 0); /* Safari and Chrome */
  -o-transform: skew(30deg, 0); /* Opera */
}
.box2 {
  transform: scale(.5, 1);
  -ms-transform: scale(.5, 1); /* IE 9 */
  -webkit-transform: scale(.5, 1); /* Safari 和 Chrome */
  -o-transform: scale(.5, 1); /* Opera */
  -moz-transform: scale(.5, 1); /* Firefox */
}
.box3 {
  transform: rotate(30deg);
-ms-transform: rotate(30deg);		/* IE 9 */
-webkit-transform: rotate(30deg);	/* Safari and Chrome */
-o-transform: rotate(30deg);		/* Opera */
-moz-transform: rotate(30deg);		/* Firefox */
}
.box4 {
transform: translate(100px,50px);
-ms-transform: translate(100px,50px);		/* IE 9 */
-webkit-transform: translate(100px,50px);	/* Safari and Chrome */
-o-transform: translate(100px,50px);		/* Opera */
-moz-transform: translate(100px,50px);		/* Firefox */
}
</style>