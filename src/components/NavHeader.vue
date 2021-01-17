<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">雲服務</a>
          <a href="javascript:;">協議規則</a>
        </div>
        <div class="topbar-user"></div>
      </div>
    </div>
    <div class="nav-header"></div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss" scoped>
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
  }
  .container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
