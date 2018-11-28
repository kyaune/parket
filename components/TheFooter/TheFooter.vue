<template>
    <div class="main">
        <div class="container">
            <div class="logo">
<img src="@/static/logo.png">
            </div>
            <div class="contacts">
<p>+7 913 072 15 41

Новокузнецк

ул. Ермакова, 30 А
</p>
            </div>
            <div class="copyright">
<p>
    Сделано с любовью в

Санкт-Петербурге
</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    background-color: rgb(56, 56, 56);
    width: 100%;
    height: 145px;
    padding-top: 38px ;
    padding-bottom: 48px;
}
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white;
    flex: 170px;
    font-size: 13px;
}
.contacts{
    max-width: 170px;
    text-align: center;
}
.copyright{
    max-width: 170px;
        text-align: center;


}
img {
    width: 195px;
    height: 72px;
}
</style>
