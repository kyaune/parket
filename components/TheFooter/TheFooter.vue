<template>
    <div class="main">
        <div class="container">
            <div class="logo">
<img src="@/static/logo.png">
            </div>
            <div class="contacts">
<p>+7 913 072 15 41 <br>

Новокузнецк<br>

ул. Ермакова, 30 А
</p>
            </div>
            <div class="copyright">
<p>
Сделано с любовью в
Санкт-Петербурге
</p>
<div class="anchor">⚓️</div>
            </div>
        </div>
        <!-- <div class="imported">Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
    </div>
</template>

<style scoped>
.main{
    background-color: rgb(56, 56, 56);
    width: 100%;
    height: 145px;
    margin: 0px 0px 0px 0px;
}
.container{
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
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
    display: flex;
    flex-direction: row;
}
.anchor{
   line-height: 38px;
    font-size: 30px;
    margin-left: 10px;
    position: relative;
    top: 2px;
}
img {
    width: 195px;
    height: 72px;
}
p{
    line-height: 18px;
}

.imported{
    font-size: 12px;
    color: black;
}
</style>
