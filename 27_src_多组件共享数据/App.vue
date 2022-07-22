<template>
  <div id="app">
    <CountDemo/>
    <hr/>
    <PersonDemo/>
  </div>
</template>

<script>
  import CountDemo from './components/CountDemo'
  import PersonDemo from './components/PersonDemo'

  export default {
    name: 'App',
    components: {CountDemo, PersonDemo}
  }
</script>
