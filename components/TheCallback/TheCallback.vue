<template>
<div class="containet">
    <div class="main">
    
        <div class="description">
            <div class="description-1">Выберите дизайн напольного покрытия,</div>
            <div class="description-2">остальное мы сделаем сами</div>
        </div>
        <div class="callback">
            <div class="callback-button"><button type="button"
            v-on:click="isShown = true">
            Заказать обратный звонок
            </button>
            </div>
            <div class="callback-info">Поможем рассчитать стоимость и сроки. 
            Проконсультируем какой вариант покрытия подойдет именно вам.
            </div>
        </div>
        
    </div>
    <div class="popup" v-if="isShown">
               111111919929290219219021921092
    </div>
    </div>
</template>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
}
.callback{
    display: flex;
    flex-direction: row;
    /* flex: 280px; */
    margin-top: 40px;
}
.callback-info{
    max-width: 258px;
    margin-left: 50px;
    font-size: 12px;
}
button{
background-color: rgb(0, 120, 255);
color:white;
height: 50px;
width: 284px;
text-align: center;
border-radius: 6px;
font-size: 18px;
cursor: pointer;
}
.description-1{
    font-weight: 800;
}
.popup{
    /* width: 100vw;
    height: 100vh; */
    background-color: rgba(0, 0, 0, 100);
    z-index: 2;
    position: relative;
    /* top:-600px; */
}
</style>
<script>
export default {
    data() {
        return {
            isShown:false
        };
    },
    methods: {
        change(){
          this.isShown = !this.isShown;
          console.log(this.isShown);
        }
    }
}
</script>




