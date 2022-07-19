<template>
  <div id="app">
    <div class="container">
      <SearchDemo/>
      <ListDemo/>
    </div>
  </div>
</template>

<script>
  import SearchDemo from './components/SearchDemo'
  import ListDemo from './components/ListDemo'
  export default {
    name: 'App',
    components: {SearchDemo, ListDemo}
  }
</script>