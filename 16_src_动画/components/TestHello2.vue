<template>
  <div>
    <button @click="isShow = !isShow">展示/隐藏</button>
    <transition appear name="hello">
      <h3 v-show="isShow" >hello</h3>
    </transition>

    <transition-group appear name="hello">
      <h3 v-show="isShow" key="1">java</h3>
      <h3 v-show="isShow" key="2">vue</h3>
    </transition-group>
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
    /*transition: 0.5s linear;*/ /*动画写在这也行*/
  }

  /*进入的起点、离开的终点*/
  .hello-enter, .hello-leave-to {
    transform: translateX(-100%);
  }

  /*进入和离开的过程中*/
  .hello-enter-active, .hello-leave-active {
    transition: 0.5s linear;
  }

  /*进入的终点、离开的起点*/
  .hello-enter-to, .hello-leave {
    transform: translateX(0);
  }
</style>