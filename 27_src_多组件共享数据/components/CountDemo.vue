<template>
  <div>
    <h3>当前求和为：{{sum}}</h3>
    <h4>当前求和扩大10倍为：{{bigSum}}</h4>
    <button @click="increment(n)">+1</button>
    <button @click="decrement(n)">-1</button>
    <p style="color: red">Person组件的人数为：{{persons.length}}</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  name: 'CountDemo',
  data() {
    return {
      n: 1
    }
  },
  computed: {
    ...mapState(['sum', 'persons']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    ...mapMutations({increment: 'ADD', decrement: 'SUB'})
  }
}
</script>

<style scoped>
  button {
    margin-left: 4px;
  }
</style>
