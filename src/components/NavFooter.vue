<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" />
      <p>小米商城</p>
    </div>

    <div class="footer-link">
      <a href="">河畔一角主頁</a><span>|</span> <a href="">Vue全棧課程</a
      ><span>|</span> <a href="">React全家桶課程</a><span>|</span>
      <a href="">微信支付專項課程 (H5+小程序+Node+Mongo)</a>
    </div>

    <div class="copyright">
      Copyright ©2020
      <span class="domain">mi.futurefe.com</span> All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss">
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>
