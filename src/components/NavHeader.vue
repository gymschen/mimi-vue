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
    <div class="nav-header">
      <div class="container">
        <div class="header-log">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手機</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi紅米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>電視</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss" >
@import '@/assets/scss/base.scss';
@import '@/assets/scss/mixin.scss';

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
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

  .nav-header {
    .container {
      height: 112px;
      @include flex();
      .header-log {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-logo.png') no-repeat center;
            background-size: 55px;
            transition: margin 0.2s;
          }
          &:after {
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-home.png') no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 264px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            // background-color: yellow;
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url('/imgs/icon-search.png') no-repeat center;
            background-size: contain;
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
