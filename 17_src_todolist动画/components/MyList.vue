<template>
  <div>
    <ul class="todo-main">
      <transition-group appear name="thing">
        <MyItem
            v-for="thing in things"
            :key="thing.id"
            :thing="thing"
        />
      </transition-group>
    </ul>
  </div>
</template>

<script>
  import MyItem from "./MyItem";
  export default {
    name: 'MyList',
    components: {MyItem},
    props: ['things']
  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

  .thing-enter-active {
    animation: demo 0.5s linear; /*表示进来的动画*/
  }

  .thing-leave-active {
    animation: demo 0.5s reverse; /*表示出去的动画*/
  }

  /*添加关键帧*/
  @keyframes demo { /*demo是动画名*/
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>
