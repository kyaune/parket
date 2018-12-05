<template>
    <header class="container">
<div class="logo"> 
    <div class="name">
    <div class="main-name-1">
        Паркет 
    </div>
     <div class="main-name-2">
          &nbsp;А 
     </div>
</div>
<div class="description">
    Продаем напольные покрытия
</div>
</div>
<div class="contacts">
    <div class="telephone">
        +7 913 072 15 41
    </div>
    <div class="adress">
ул. Ермакова, 30А
    </div>
</div>
</header>
</template>
<style scoped>
.container{
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    flex: 220px;
    justify-content: space-between;
    /* margin-left: -15px;
    margin-right: -15px; */
    margin-bottom: 90px;
}
.logo{
    display: flex;
    flex-direction: column;
}
.name{
    display:flex;
    font-size: 50px;
    font-weight: bold;
}
.main-name-2{
    color: lightgreen;
}
.contacts{
   margin-left: 20%;
   text-align: end;
   display: flex;
   flex-direction: column;
align-items: flex-end;
}
.adress{
    font-size: 16px;
}
.telephone{
    font-size: 25px;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
.description{
    font-size: 16px;
}

</style>