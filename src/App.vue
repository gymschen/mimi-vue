<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import storage from '@/storage'

export default {
  name: 'app',
  mounted() {
    // storage.setItem('a', 1)
    // storage.setItem('user', { a: 1 })
    // storage.clear('user')
  }
}
</script>

<style lang="scss">
</style>
