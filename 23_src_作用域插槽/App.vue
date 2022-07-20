<template>
  <div id="app">
    <div class="container">
      <CategoryDemo title="balls">
        <template scope="testDataObj">  <!--写法一: scope属性-->
          <ul>
            <li v-for="(item, index) of testDataObj.balls" :key="index">{{item}}</li>
          </ul>
        </template>
      </CategoryDemo>

      <CategoryDemo title="balls">
        <template slot-scope="{balls}">  <!--写法二: slot-scope属性-->
          <ol>
            <li v-for="(item, index) of balls" :key="index">{{item}}</li>
          </ol>
        </template>
      </CategoryDemo>
    </div>
  </div>
</template>

<script>
  import CategoryDemo from './components/CategoryDemo'

  export default {
    name: 'App',
    components: {CategoryDemo}
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
</style>