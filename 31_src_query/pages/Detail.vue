<template>
  <div>
    <p>消息id：{{$route.query.id}}</p>
    <p>消息详细：{{$route.query.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Detail'
}
</script>