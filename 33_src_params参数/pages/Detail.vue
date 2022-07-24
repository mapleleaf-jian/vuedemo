<template>
  <div>
    <p>消息id：{{$route.params.id}}</p>
    <p>消息详细：{{$route.params.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Detail'
}
</script>