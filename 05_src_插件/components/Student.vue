<template>
  <div>
    <h2 @click="showName">{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: 'zhang'
      }
    }
  }
</script>
