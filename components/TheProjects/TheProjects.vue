<template>
     <div class="main">
         <div class="info">
             <h1>44 завершенных проекта</h1>
             <p>квартиры, офисы, фитнес клубы</p>
 <p>и новокузнецкий драматический театр</p>
         </div>
         
        <div class="library"
         v-on:mouseover="stop"
        v-on:mouseout="start"
        >
        <transition name="component-fade" mode="out-in">
        <div class="slider"  v-bind:key="choseImage">
        
        <!-- <Slides :image="images[Math.abs(choseImage) % images.length]"/> -->
          <img 
          :src="images[Math.abs(choseImage) % images.length].src"
          
          />      
         
         
          <div class="text">
          {{images[Math.abs(choseImage) % images.length].name}}
          </div>
         
        </div>
        </transition>
        </div>
         
        <div class="buttons"
        v-on:mouseover="stop"
        v-on:mouseout="start"
        >
<div class="button-prev">
<img src="@/static/back.svg"
v-on:click="prev"
>
</div>
<div class="button-next">
<img src="@/static/next.svg"
v-on:click="next"
>
</div>
</div>
</div>
 </template>
 <style scoped>

 h1{
     font-size: 27px;
     font-weight:800;
 }
 .p{
     font-size: 27px;
 }
 .main{
     margin-bottom: 80px;
     line-height: 20px;
 }
 .library{
     margin-top: 45px;
     display: flex;
     flex-direction: column;
     min-height: 500px;
 }
 .library img{
  width: 887px;
  height: 466px;
 }
 .description{
     font-size: 13px;
     text-align: center;
     margin-top: 30px;
 }
.buttons{
    position: relative;
    bottom: 290px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 7px;
}
 .buttons img{
     height: 40px;
     width: 40px;
     background-color:rgb(236, 232, 232);
     opacity: 0.1;
 }
 .text{
    font-size: 13px;
    text-align: center;
    padding-top: 10px;
}
 .component-fade-enter-active, .componet-fade-leave-active {
 transition: all .8s ease;
 /* opacity: 1; */
 position: absolute;
 /* overflow: visible; */
}
.component-fade-enter, .component-fade-leave-to {
    transform: translateX(-20px);
 opacity: 0;
 /* overflow: hidden; */
}


 </style>
<script>

import Slides from '@/components/TheProjects/Slides.vue'
export default {
    components :{
        Slides
    },
    data() {
        return {
            images: [
                {
                    id: 0,
                    name: "Первый адрес",
                    src: require('~/components/TheProjects/image1.jpg')
                },
                {
                    id: 1,
                    name: "Второй адрес",
                    src: require('~/components/TheProjects/image2.jpg')
                },
                {
                    id: 2,
                    name: "Третий адрес",
                    src: require('~/components/TheProjects/image3.jpg')
                },
                {
                    id: 3,
                    name: "Новокузнецкий драматический театр, 540 м2",
                    src: require('~/components/TheProjects/image4.jpg')
                }
            
            ],
            choseImage : 1,
            timer: null,
        };
        
    },
 mounted() {
this.start();
 },
    methods : {
    start(){
        this.timer = setInterval(this.next, 4000);
    },
    next(){
        this.choseImage++;
        console.log(this.timer);
    },
    prev(){
        this.choseImage--;
    },
    stop(){
        clearInterval(this.timer);
        this.timer = null;
    },
    
    },
//     computed:{
// showID(){
//         return this.name;
//     }
//     } 
};
</script>