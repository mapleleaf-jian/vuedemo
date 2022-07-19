<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyword"/>
        <button @click="getUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'SearchDemo',
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      getUsers() {
        this.$bus.$emit('getData', {isFirst: false, isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
            res => {
              this.$bus.$emit('getData', {isLoading: false, users: res.data.items})
            },
            error => {
              this.$bus.$emit('getData', {isLoading: false, errMsg: error.message, users: []})
            }
        )
      }
    }
  }
</script>
