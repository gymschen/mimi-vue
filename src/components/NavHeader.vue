<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <!-- menu -->
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">雲服務</a>
          <a href="javascript:;">協議規則</a>
        </div>
        <!-- menu -->

        <!-- user -->
        <div class="topbar-user">
          <a href="javascript:;">登錄</a>
          <a href="javascript:;">注冊</a>
          <a href="javascript:;" class="my-car"
            ><span class="icon-car"></span> 購物車</a
          >
        </div>
        <!-- user -->
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

<style lang="scss" >
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      display: inline-block;
      color: #b0b0b0;
      margin-left: 17px;
    }
    .my-car {
      width: 110px;
      background-color: #ff6600;
      text-align: center;
      color: #ffffff;
      .icon-car {
        display: inline-block;
        width: 16px;
        height: 12px;
        background: url('/imgs/icon-cart-checked.png') no-repeat center;
        background-size: contain;
        margin-right: 4px;
      }
    }
  }
}
</style>
