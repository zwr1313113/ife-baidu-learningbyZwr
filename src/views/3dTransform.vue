<template>
  <div>
    <div class="card">
      <img
        src="../assets/pictures/正面.jpg"
        alt=""
        class="up"
      >
      <img
        src="../assets/pictures/反面.jpg"
        alt=""
        class="down"
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$number: 300px;
$key: margin;

.card {
  width: $number;
  #{$key}: 0 auto;
  perspective: 1000;
  font: {
    size:20px;
    weight: bold;
  }
  img {
    position: absolute;
    transform-style: preserve-3d;
    top: 0;
    left: 50%;
    width: 250px;
    height: 350px;
    transition: all 2s ease-in-out;
  }
  .down {
    backface-visibility: hidden;
    transform: rotateY(-180deg);
  }
  &:hover {
    .down {
      transform: rotateY(0deg);
    }
    .up {
      transform: rotateY(-180deg);
    }
  }
}
</style>