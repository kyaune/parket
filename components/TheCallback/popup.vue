<template>
    <div class="main">
        <div class="container">
            <form>
                <div class="survey">
                    <h1>Оставьте, пожалуйста, свои данные, чтобы помочь нам связаться с Вами</h1>
                    <div class="survey-name" autofocus>
                        <h2>Как Вас зовут?</h2>
                    <input type="text" placeholder="Ваше имя">
                    </div>
                    <div class="survey-email">
                        <h2>Как с Вами связаться?</h2>
                    <input type="email" placeholder="Ваш почтовый адрес">
                    </div>
                    <div class="submit-form">
                    <input type="submit" value="Отправить" id="sub-button">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
.main{
    
    background-color:rgb(243, 238, 231);
    position: fixed;
    overflow: hidden;
    top: 200px;
    margin-left: 100px;
    font-size: 18px;
}
.container{
    width: 400px;
    height: 400px;
    border-width: 10px;
    border-radius: 8px;
    border-color: green;
    border-style: solid;
}
h1{
    font-size: 24px;
    text-align: center;
}
h2{
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.submit-form{
    margin-top: 15px;
}
#sub-button{
    background-color: rgb(83, 177, 83);
    border-width: 4px;
    border-radius: 2px;
    border-style: solid;
    border-color:rgb(56, 153, 56);
}
.survey{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
}
</style>

