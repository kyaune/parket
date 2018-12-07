<template>
    <div class="main">
        <div class="container">
            <form
            @submit.prevent="processForm"
            >
                <h1>Оставьте, пожалуйста, свои данные, чтобы помочь нам связаться с Вами</h1>
                <div class="survey">
                    
                    <div class="survey-name" autofocus>
                        <h2>Как Вас зовут?</h2>
                    <input type="text" placeholder="Ваше имя" id="input-form"
                    v-model="name"
                    >
                    </div>
                    <div class="survey-email">
                        <h2>Как с Вами связаться?</h2>
                    <input type="email" placeholder="Ваш почтовый адрес" id="input-form" 
                    v-model="email"
                    >
                    </div>
                    <div class="submit-form">
                    <input type="submit" value="Отправить" id="sub-button">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        name: '',
        email: ''
        };
    },
    methods: {
        processForm(){
            console.log('name:', this.name, 'email:', this.email);
            alert("Processing!");
        }
    }
}
</script>

<style scoped>
.main{
    background-color:rgb(243, 238, 231);
    position: absolute;
    overflow: hidden;
    top: 200px;
    margin-left: 100px;
   
}
.container{
    width: 400px;
    height: 300px;
    border-width: 10px;
    border-radius: 8px;
    border-color: rgb(75, 175, 75);
    border-style: solid;
    font-size: 22px;
}
h1{
    font-size: 22px;
    font-weight: 600;
    text-align: center;
}
h2{
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 4px;
}
.submit-form{
    margin-top: 10px;
}
#sub-button{
    background-color: rgb(93, 216, 93);
    border-width: 4px;
    border-radius: 2px;
    border-style: solid;
    border-color:rgb(108, 238, 108);
    font-size: 14px;
    width: 110px;
    height: 30px;
    font-weight: 600;
}
.survey{
  margin-left: 10px;
}
input{
    width: 230px;
    height: 25px;
    border: 2px solid rgb(101, 214, 101);
    border-radius: 4px;
}
</style>

