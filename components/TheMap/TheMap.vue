<template>
<div class="main">
    <div class="container">
    <div class="header">
    <h1>    Все образцы можно посмотреть и потрогать </h1>
    </div>
    <div class="contacts">
        <div class="place">
<p>с 10:00 до 19:00</p>

<p>на улице Ермакова, дом 30А</p>
        </div>
        <div class="time">
<p>+7 913 072 15 41</p>

<p>oartushkina@gmail.com</p>
        </div>
    </div>
    </div>
    <div class="map">
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A021b9d3045be6818810965207b74c527bd65354c84db8237dc8ceb0155fcba2e&amp;width=900&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
    </div>
</div>
</template>

<style scoped>
h1{
    font-weight: bold;
    font-size: 27px;
}
.map{
    width: 900px;
    height: 400px;
}
.main{
    margin-top: 90px;
    font-size: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-bottom: 190px;
}
.contacts{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 660px;
}
.container{
    margin-bottom: 30px;
}
</style>

