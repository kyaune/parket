<template>
     <div class="main">
         <div class="info">
             <h1>44 завершенных проекта</h1>
             <p>квартиры, офисы, фитнес клубы</p>
 <p>и новокузнецкий драматический театр</p>
         </div>
        <div class="library">
        <Slides />
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
                    src: '1.jpg'
                },
                {
                    id: 1,
                     name: "Второй адрес",
                    src: '2.jpg'
                },
                {
                    id: 2,
                     name: "Третий адрес",
                    src: '3.jpg'
                },
                {
                    id: 3,
                     name: "Новокузнецкий драматический театр, 540 м2",
                    src: '4.jpg'
                }
            
            ],
            choseImage : 0
        };
        
    },
    // methods :{
    //     move(){
    //         var flag = this.choseImage;
    //         flag++;
    //         console.log(flag);
    //         if(flag >= this.images.length){
    //             flag = 0;
    //         }
    //         this.choseImage = flag;
    //     },
    // },
    
    // created() {
    //     var self = this;
    //     setInterval(() =>{
    //         self.move();
    //         console.log('Done!');
    //     }, 10000);
    // }
    
};
</script>