<template>
  <div>
    <ul class="todo-main">
      <MyItem
          v-for="thing in things"
          :key="thing.id" :thing="thing"
          :changeCheck="changeCheck"
          :deleteThing="deleteThing"
      />
    </ul>
  </div>
</template>

<script>
  import MyItem from "@/components/MyItem";
  export default {
    name: 'MyList',
    components: {MyItem},
    props: ['things', 'changeCheck', 'deleteThing']
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
