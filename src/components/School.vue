<template>
  <div>
    <h2 @click="showName">{{name}}</h2>
  </div>
</template>

<script>
  // 局部引入混合
  import {mixin} from '@/mixin'
  export default {
    name: 'School',
    data() {
      return {
        name: 'java school'
      }
    },
    // 使用混合，必须使用数组
    mixins: [mixin]
  }
</script>
