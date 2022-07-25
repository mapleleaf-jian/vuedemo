<template>
  <div>
    <ul>
      <li :style="{opacity}">vue</li>
      <li>news001 <input type="text"></li>
      <li>news002 <input type="text"></li>
      <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1,
      timer: null
    }
  },
  activated() {
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>
