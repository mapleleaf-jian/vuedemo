<template>
  <div>
    <button @click="isShow = !isShow">展示/隐藏</button>
    <transition appear name="hello">
      <h3 v-show="isShow" >hello</h3>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TestHello2',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h3 {
    background-color: orange;
  }

  /*进入的起点*/
  .hello-enter {
    transform: translateX(-100%);
  }

  /*进入的起点*/
  .hello-enter-to {
    transform: translateX(0);
  }

</style>