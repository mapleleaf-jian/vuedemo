<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: 'About',
  beforeRouteEnter(to, from, next) {
    console.log('...beforeRouteEnter')
    if (to.meta.isAuth) {
      if (store.state.address !== 'beijing') {
        alert('地址不对应')
        return
      }
    }
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('...beforeRouteLeave')
    next()
  }
}
</script>