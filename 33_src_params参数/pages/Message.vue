<template>
  <div>
    <ul>
      <li v-for="m of msgList" :key="m.id">
<!--        <router-link :to="`/home/message/detail/${m.id}/${m.name}`">{{m.name}}</router-link>-->

        <router-link :to="{
          name: 'msgdetail',
          params: {
            id: m.id,
            name: m.id
          }
        }">
          {{m.name}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      msgList: [
        {id: '001', name: 'message1'},
        {id: '002', name: 'message2'},
        {id: '003', name: 'message3'}
      ]
    }
  }
}
</script>
