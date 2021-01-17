<template>
  <div>
    <div class="father">
      <div class="block">1</div>
      <div class="block">2</div>
      <div class="block">3</div>
      <div class="block">4</div>
      <div class="block">5</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index'
}
</script>

<style lang="scss" >
.father {
  display: flex;
  flex-direction: row;
}
.block {
  background-color: #ccc;
  margin: 10px;
  // display: inline-block;
  width: 50px;
  height: 50px;
}
</style>
