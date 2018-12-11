<template>
<div class="containet">
    <div class="main">
    
        <div class="description">
            <div class="description-1">Выберите дизайн напольного покрытия,</div>
            <div class="description-2">остальное мы сделаем сами</div>
        </div>
        <div class="callback">
            <div class="callback-button"><button type="button"
            v-on:click="change">
            Заказать обратный звонок
            </button>
            </div>
            <div class="callback-info">Поможем рассчитать стоимость и сроки. 
            Проконсультируем какой вариант покрытия подойдет именно вам.
            </div>
        </div>
        
    </div>
    <transition name="component-fade" mode="out-in">
    <popup v-if="isShown"
    v-on-clickaway="change"
    @click="change"
    >
    </popup>
    </transition>
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
    line-height: 16px;
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
.description{
    letter-spacing: 1px;
    font-size: 27px;
    line-height: 34px;
}
.description-1{
    font-weight: 800;
}
.popup{
    background-color: rgba(0, 0, 0, 100);
    z-index: 2;
}
.component-fade-enter-active {
 transition: all .8s ease;
 opacity: 1;
 overflow: visible;
 /* transform: translateX(40px); */
}
.component-fade-enter{
 transform: translateX(-100px);
 opacity: 0.3;
 overflow: hidden;
}
.component-fade-enter-to{
 /* transform: translateX(40px); */
 opacity: 1;
 overflow: visible;
}
.componet-fade-leave-active {
 transition: all .8s ease;
 opacity: 0.3;
 /* overflow: hidden; */
}
.component-fade-leave {
 transform: translateX(0px);
 opacity: 1;
 overflow: visible;
}
.component-fade-leave-to {
 transform: translateX(40px);
 opacity: 0.3;
 overflow: hidden;
}

</style>
<script>
import popup from '@/components/TheCallback/popup.vue'
import { directive as onClickaway } from 'vue-clickaway';
export default {
     directives: {
    onClickaway: onClickaway,
  },
    components: {
        popup,
    },
    data() {
        return {
            isShown:false
        };
    },
    methods: {
        change(){
          this.isShown = !this.isShown;
          console.log(this.isShown);
        },
        away: function() {
          console.log('clicked away');
    },
    }
}
</script>




