<template>
    <div class="main">
    
        <div class="description">
            <div class="description-1">Выберите дизайн напольного покрытия,</div>
            <div class="description-2">остальное мы сделаем сами</div>
        </div>
        <div class="callback">
            <div class="callback-button"><button type="button"
            v-on:click="change"
            >
            Заказать обратный звонок
            </button></div>
            <div class="callback-info">Поможем рассчитать стоимость и сроки. 
            Проконсультируем какой вариант покрытия подойдет именно вам.
            </div>
            <TheModal v-if="showModal" @close="showModal = false">
            </TheModal>
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
</style>

<script>
import TheModal from '@/components/TheCallback/TheModal.vue'
export default {
components :{
        TheModal
    },
    data() {
        return {
        showModale: false
        }
    },
    methods: {
        change(){
            console.log(showModale);
            return !showModale;
        }
    }
}
</script>



