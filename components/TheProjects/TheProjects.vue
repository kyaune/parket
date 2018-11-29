<template>
     <div class="main">
         <div class="info">
             <h1>44 завершенных проекта</h1>
             <p>квартиры, офисы, фитнес клубы</p>
 <p>и новокузнецкий драматический театр</p>
         </div>
        <div class="library">
        <Slides :image="images[choseImage % images.length]"/>

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

 img{
  width: 887px;
  height: 466px;
 }
 .main{
     margin-bottom: 90px;
     line-height: 20px;
 }
 .library{
     margin-top: 45px;
     display: flex;
     flex-direction: column;
 }
 .description{
     font-size: 13px;
     text-align: center;
     margin-top: 30px;
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
                    url: require('~/components/TheProjects/image1.jpg')
                },
                {
                    id: 1,
                    name: "Второй адрес",
                    url: require('~/components/TheProjects/2.jpg')
                },
                {
                    id: 2,
                    name: "Третий адрес",
                    url: require('~/components/TheProjects/3.jpg')
                },
                {
                    id: 3,
                    name: "Новокузнецкий драматический театр, 540 м2",
                    url: require('~/components/TheProjects/4.jpg')
                }
            
            ],
            choseImage : 0
        };
        
    },

    methods :{
        move(){
            var that = this;
            that.choseImage++;
             console.log(that.choseImage);
        },
    },
    
    created() {
        setInterval(() =>{
            this.move();
            console.log('Done!');
        }, 4000);
    }
    
};
</script>