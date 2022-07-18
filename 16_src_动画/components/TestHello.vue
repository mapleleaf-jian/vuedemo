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
  name: 'TestHello',
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

  .hello-enter-active {
    animation: demo 0.5s linear; /*表示进来的动画*/
  }

  .hello-leave-active {
    animation: demo 1s reverse; /*表示出去的动画*/
  }

  /*添加关键帧*/
  @keyframes demo { /*demo是动画名*/
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>