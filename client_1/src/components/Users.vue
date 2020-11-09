<template>
<div class = "usersList">
    <div class = "user" v-for="(user, i) in users" :key="i">{{user}}</div>
</div>

</template>

<script>

export default {
  name: 'users',
  props: {
    users: Array
  }
}
</script>

<style>
    .usersList{
      float:left;
        width:300px;
        height:500px;
        overflow-y: scroll;
        background-color: white;
        text-align: center;
        font-size: 30px;
    }
    .user{
      color:black;
    }
</style>
