<template>
  <div id="app">
    <div class="container">
      <CategoryDemo name="foods" :dataList="foods">
        <h4>这是一个foods列表</h4>
      </CategoryDemo>

      <CategoryDemo name="balls" :dataList="balls">
        <ul>
          <li v-for="(item, index) of balls" :key="index">{{item}}</li>
        </ul>
      </CategoryDemo>

      <CategoryDemo name="lessons" :dataList="lessons"></CategoryDemo>
    </div>
  </div>
</template>

<script>
  import CategoryDemo from './components/CategoryDemo'

  export default {
    name: 'App',
    components: {CategoryDemo},
    data() {
      return {
        foods: ['noodles', 'barbecue', 'hotspot'],
        balls: ['football', 'basketball', 'volleyball'],
        lessons: ['English', 'Math', 'Science']
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
</style>