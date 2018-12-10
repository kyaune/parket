

<template>
     <div class="main">
         <div class="info">
             <h1>44 завершенных проекта</h1>
             <p>квартиры, офисы, фитнес клубы</p>
 <p>и новокузнецкий драматический театр</p>
         </div>
         <div class="carousel">
        <div class="library"
         v-on:mouseover="stop"
        v-on:mouseout="start"
        >
        
        <transition name="component-fade">
        <div class="slider"  v-bind:key="choseImage">
            
          <img 
          :src="images[Math.abs(choseImage) % images.length].src"
          />    
          
          
            
        </div>
        </transition> 
        <transition name="slide">
        <div class="text" v-bind:key="choseImage">
          {{images[Math.abs(choseImage) % images.length].name}}
          </div>
          </transition> 
        
        </div>
        </div>
         
        <div class="buttons"
        v-on:mouseover="stop"
        v-on:mouseout="start"
        >
<div class="button-prev"
v-on:click="prev">
<img src="@/static/buttons/back1.svg">
</div>
<div class="button-next"
v-on:click="next">
<img src="@/static/buttons/next1.svg">
</div>
</div>
<div class="picker">
 <div class="squares" 
        v-for="image in images"
        :key="image.id"
        v-on:click="choseImage = image.id"
        v-bind:class="{'active' : image.id == (Math.abs(choseImage) % images.length)}"
        v-on:mouseover="stop"
        >
         
        </div>
</div>
</div>
 </template>
<script>

export default {
    data() {
        return {
            images: [
                {
                    id: 0,
                    name: "Первый адрес",
                    src: require('~/static/projects/image1.jpg') 
                },
                {
                    id: 1,
                    name: "Второй адрес",
                    src: require('~/static/projects/image2.jpg')
                },
                {
                    id: 2,
                    name: "Третий адрес",
                    src: require('~/static/projects/image3.jpg')
                },
                {
                    id: 3,
                    name: "Новокузнецкий драматический театр, 540 м2",
                    src: require('~/static/projects/image4.jpg')
                }
            
            ],
            choseImage : 0,
            currentCircle: 0,
            timer: null,
            isActive : false,
            active : {
                backgroundColor: 'rgba(0, 0, 0, 0.92)',
            },
        };
        
    },
    computed: {
        propertyComputed: function() {
            return this.choseImage;
        }
    },
created() {
this.start();
 },
    methods : {
    start(){
        this.timer = setInterval(this.next, 4000);
    },
    next(){
        this.choseImage++;
    },
    prev(){
        this.choseImage--;
    },
    stop(){
        clearInterval(this.timer);
        this.timer = null;
    },
    change(){
        this.isActive = !this.isActive;
        console.log(this.currentCircle);
         }
    },
   
};
</script>

<style scoped>

 h1{
     font-size: 27px;
     font-weight:800;
 }
 .p{
     font-size: 27px;
 }
 .main{
     margin-bottom: 70px;
     line-height:1.2;
 }
 .library{
     margin-top: 45px;
     display: flex;
     flex-direction: column;
     min-height: 500px;
 }
 .carousel {
     min-width: 887px;
     min-height: 466px;
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
    bottom: 295px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 7px;
}
 .buttons img{
     border-radius: 50%;
     height: 40px;
     width: 40px;
     background-color:rgb(236, 232, 232);
     opacity: 0.1;
 }
 .buttons img:hover{
     opacity: 0.6;
 }
 .button-prev{
 }
 .button-next{
 }
 .text{
    text-align: center;
    font-size: 13px;
    padding-top: 10px;
}
 .component-fade-enter-active{
    transition: all .8s ease;
    position: absolute;
    overflow:visible;
}
.component-fade-enter-to{
    transform: translateX(0px);
    overflow: visible;
    opacity: 1;
}
.component-fade-enter{
    transform: translateX(-80px);
    overflow: hidden;
    opacity: 0.8;
}
.component-fade-leave-active {
    transition: all .6s ease;
    position: absolute;
    overflow: hidden;
}
.component-fade-leave {
/* transform: translateX(0px); */
overflow: visible;
opacity: 1;
}
.component-fade-leave-to {
/* transform: translateX(80px); */
opacity: 0.8;
overflow: hidden;
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
  opacity: 1;
  position: absolute;
  z-index: -1;
}
.slide-enter, .slide-leave-to {
  opacity: 0.3;
}
.picker{
    width: 56px;
    height: 10px;
    position: relative;
    top: -30px;
    margin-left: 47%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.squares{
    /* top: 400px; */
    width: 8px;
    height: 8px;
    position: relative;
    background-color: 255;
    border-radius: 50%;
    border-width: 2px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.32);
}
.squares:hover{
    background-color: rgba(0, 0, 0, 0.42);
}
.active{
    background-color: rgba(0, 0, 0, 0.52);  
}

 </style>