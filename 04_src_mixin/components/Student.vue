<template>
  <div>
    <h2 @click="showName">{{name}}</h2>
  </div>
</template>

<script>
  // 局部引入混合
  import {mixin} from '../mixin.js'
  export default {
    name: 'Student',
    data() {
      return {
        name: 'zhang'
      }
    },
    mixins: [mixin],
    mounted() {
      console.log('哎')
    }
  }
</script>
