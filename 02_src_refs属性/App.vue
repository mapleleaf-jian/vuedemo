<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showInfo" ref="btn">展示msg</button>
    <School ref="vc"></School>
  </div>
</template>

<script>
import School from './components/School'
export default {
  name: 'App',
  components: {School},
  data() {
    return {
      msg: 'hello'
    }
  },
  methods: {
    showInfo() {
      console.log(this.$refs)
      console.log(this.$refs.title) // 真实DOM元素
      console.log(this.$refs.btn) // 真实DOM元素
      console.log(this.$refs.vc) // VueComponent
    }
  }
}
</script>
