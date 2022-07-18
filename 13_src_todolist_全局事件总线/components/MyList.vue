<template>
  <div>
    <ul class="todo-main">
      <MyItem
          v-for="thing in things"
          :key="thing.id"
          :thing="thing"
      />
    </ul>
  </div>
</template>

<script>
  import MyItem from "@/../../15_src_todolist编辑/components/MyItem";
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
</style>
