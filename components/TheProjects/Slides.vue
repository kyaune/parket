<template>
   <div class="container">
    <div class="slideImage" 
    
    >
    </div>
    <div class="text">
        {{image.name}}
    </div>
    </div>
</template>
<script>
export default {
    props : ["image"],
    computed: {
        setBackgroundImage (){
            return {
                backgroundImage: "url("+this.image.url+")"
            };
        }
    }
}

</script>
<style scoped>
.slideImage{
    height: 446px;
    width: 887px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("/_nuxt/components/TheProjects/3.jpg");
}

</style>
