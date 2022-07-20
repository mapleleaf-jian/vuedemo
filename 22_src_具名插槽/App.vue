<template>
  <div id="app">
    <div class="container">
      <CategoryDemo name="foods" :dataList="foods">
        <h4 slot="center">这是一个foods列表的center</h4>
        <h4 slot="footer">这是一个foods列表的footer</h4>
      </CategoryDemo>

      <CategoryDemo name="balls" :dataList="balls">
        <ul slot="center">
          <li v-for="(item, index) of balls" :key="index">{{item}}</li>
        </ul>
        <a slot="footer" href="https://www.baidu.com">跳转到网站</a>
      </CategoryDemo>

      <CategoryDemo name="lessons" :dataList="lessons">
        <template v-slot:footer>
          <div>
            <a href="https://www.baidu.com">网站1 </a>
            <a href="https://www.baidu.com">网站2 </a>
          </div>
          <h4>点击网站学习</h4>
        </template>
      </CategoryDemo>
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