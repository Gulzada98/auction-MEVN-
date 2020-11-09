<template>
<div class = "reg" v-on:keyup.enter="submit">
    <div class="signRegBtns">
        <button class = "signIn" @click="ShowSignIn">Sign in</button>
        <button class = "registration">Registration</button>
    </div>
   
  <div v-if="showDiv" class = "divSignIn">
    <input type="text" id = 'userLog' class = "input" autocomplete="off" placeholder="Log in:">
    <input type="text" id = 'userPass' class = "input" autocomplete="off" placeholder="Password:">
    <textarea id="textArea">test</textarea>
    <div class = "c">
        <button class = "but"  @click="click">Войти</button>
    </div>
    <div class="mistake" v-if="showmi">Введите логин!</div>
    <div class="mistake" v-if="showmiHei">Имя занято!</div>
  </div>
</div>

</template>

<script>

export default {
  name: 'RegisterForm',
  props: {
    users: Array,
    root: String
  }, 
    
  data: function () {
    return {
      showmi: false,
      er: false,
      showmiHei: false,
      NameCorrect: true,
      showDiv: false
    }
  },
  methods: {      
      ShowSignIn() {
          this.showDiv = !this.showDiv;
      },
       
    click () {
      this.NameCorrect = true
      
      const userLog = document.getElementById('userLog');
      const userPass = document.getElementById('userPass');
       const testTextArea = document.getElementById('textArea');
        //`this.root - ${this.root}user` ========== http://localhost:3000/user
        //`input value -  ${dar.value}`  ========== Gulzada  
        //`this.users - ${this.users}`   ========== null;
        testTextArea.value = `this.root - ${this.root}users  /  userLog value -  ${userLog.value}  /  userPass value -  ${userPass.value}  /  this.users - ${this.users}`
    //   if (userLog.value) {
    //     this.users.forEach(element => {
    //       if (element === userLog.value) {
    //         this.NameCorrect = false
    //       }
    //     })
    //   }
    //   if (this.NameCorrect === false) {
    //     this.showmiHei = true
    //     this.showmi = false
    //   } else if (userLog.value) {
        const user = {
          name: userLog.value,
          password:userPass.value
        }

        
        userLog.value = '';
        userPass.value = '';
        fetch(`${this.root}users/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user)
        })
        this.$emit('clickBTN', user.name, user.password)
          
        //testTextArea.value = user;
        this.showmi = false
    //   } else {
    //     this.showmi = true
    //     this.showmiHei = false
    //   }
    },
    submit () {
      this.click()
    }
  }
}
</script>

<style scoped lang="scss">
.signRegBtns{
    display: flex;
    justify-content: center;
    align-items: center;    
}
.signIn,.registration{
     align-items: center;
    box-sizing: border-box;
    width: 140px;
    height: 44px;
    border: 2px solid rgb(64, 174, 248);
    border-radius: 8px;
    font-size: 20px;
    font-weight: 500;    
    transition: all .3s;    
    background: rgb(64, 174, 248);
    color: white;   
    margin: 10px; 
}
.signIn:hover, .registration:hover {
    color:  rgb(64, 174, 248);    
    background-color:transparent;
    transition: all .4s;     
}

.divSignIn{
    display: flex;
    flex-direction: column;
}
.input{
    border: 2px solid rgb(64, 174, 248);
    width: 170px;
    height: 44px;
    font-size: 20px;
    font-weight: 500;
    margin-top: 2%;
    border-radius: 8px;
    color: black;
    outline: none;
    margin: 5px;
}
.input:hover{
  border-color: red;
}
.text{
  font-size: 100px;
  color: #e28a61;
}
.but{
    width: 180px;
    height: 50px;
    //border: 2px solid rgb(95, 255, 135);
    border: none;
    box-sizing: border-box;
    font-size: 20px;
    margin-top: 4%;
    background-color:  rgb(0, 250, 62);
    outline: none;       
    border-radius: 8px;
    transition: .3s;
}
.but:hover{
      background-color: #ffc6ab;
      transition: .3s;
}
.reg{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mistake{
  font-size: 30px;
  padding:10px;
  margin-left: 10px;
  color:#b11000;
}
</style>
