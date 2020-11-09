<template>
  <div id="app">
    <img class="logo" v-if="showSomething" width="300px" alt="auction logo" src="./assets/img4.png">
   
    <HelloWorld v-if="showSomething" msg="Welcome to Auction"/>    
    <RegisterForm v-if="showSomething" @clickBTN="click" :users = "UsersList" :root = "root" />
    <UserMainPage v-if="showMainPage" @clickBTN="click_test" :root = "root" />
    <Users :users = "UsersList" v-if="showUserList"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Users from './components/Users.vue'
import RegisterForm from './components/RegisterForm'
import UserMainPage from './components/UserMainPage'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Users,
    RegisterForm,
    UserMainPage
  },
  data: function () {
    return {
      showSomething: true,
      showMainPage: false,
      showUserList: false,
      root: 'http://localhost:3000/', // api.stepchat.site
      user: '',     
      UsersList: null
    }
  },

  methods: {
    click (a) {
      this.showSomething = false,
      this.showMainPage = true,
      //this.showUserList = true,
      this.user = a
    },
  },
  click_test(e) {
    this.showSomething = true,
      this.showMainPage = false,
      //this.showUserList = true,
      this.user = e
  },
   async beforeMount () {
    setInterval(async () => {
      const response = await fetch(this.root)
      if (response.ok) {
        const data = await response.json()
        this.UsersList = data.users
      }
    }, 1000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding-top: 60px; */
  position: relative; 
}
.logo{
  padding-top: 60px;
}
</style>


