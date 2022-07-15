<template>
  <div class="demo">
    <h2 class="fonti">{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: 'java school'
      }
    }
  }
</script>

<style lang="less" scoped>
  .demo {
    background-color: pink;

  }
  .fonti {
    font-size: 40px;
  }
</style>
