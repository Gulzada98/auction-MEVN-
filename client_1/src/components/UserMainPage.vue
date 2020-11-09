<template>
<div v-if="showme" class = "mainPage">
    <div class="header">
        <p>логин пользователя</p>
        <button class = "logOut" @click_test="click_test">Log out</button>       
    </div>
    
    <div class="bodyWrapper">
        <div class="menuWrapper">
            <button class="requestBtn">Созданные мной ЛОТЫ</button>
            <button class="requestBtn">Купленные мной ЛОТЫ</button>
            <button class="requestBtn">Создать новый лот</button>
            <button class="requestBtn">Редактировать лот</button>
           
        </div>
        <div class="displayInfaWrapper">
            <!-- 1) при нажатии на button_1 вывести на весь экран информацию о созданных лотах -->
             <!-- 2) при нажатии на button_2 вывести на весь экран информацию о купленных лотах -->
              <!-- 3) при нажатии на button_3 вывести на весь экран форму для записи данных и методом POST создать новый лот -->
               <!-- 4) при нажатии на button_4 вывести на весь экран информацию о найденной по айди лоте и позволить редактировать данные методом PUT -->
        </div>
    </div>
 
</div>

</template>

<script>
// 1) нужно соединение с RegisterForm.vue чтобы при успешном входе получить логин пользователя
export default {
  name: 'UserMainPage',
  props: {
    users: Array,
    root: String
  }, 
    
  data: function () {
    return {
      //showmi: false,
      //er: false,
     // showmiHei: false,
     
      showme: true // 
    }
  },
  methods: {      
     
       
    click_test () {
     
        //`this.root - ${this.root}user` ========== http://localhost:3000/user
        //`input value -  ${dar.value}`  ========== Gulzada  
        //`this.users - ${this.users}`   ========== null;
        this.showme = !this.showme;
  
    },
    submit () {
      this.click_test()
    }
  }
}
</script>

<style scoped lang="scss">
.header{
    display: flex;
    justify-content: flex-end;
    align-items: center;   
    width: 100%;
    height: 100px;
    background: #ffc6ab; 
    margin: 0;
    padding: 0;
}

.logOut{
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
.logOut:hover {
    color:  rgb(64, 174, 248);    
    background-color:transparent;
    transition: all .4s;     
}

.bodyWrapper{
    display: flex;
}

.menuWrapper{
    width: 30%;
    height: 500px;
    background: aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}

.requestBtn{
    width: 90%;
    height: 50px;
    align-items: center;
    box-sizing: border-box;
  
    border: none;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 500;    
    transition: all .3s;    
    background: rgb(64, 174, 248);
    color: white;   
    margin: 5px; 
}

.requestBtn:hover{
    cursor: pointer;
    background: rgb(32, 104, 238);
    transition: .3s;
}

.displayInfaWrapper{
    width: 70%;
    height: 500px;
    background: darkred;
}

</style>
