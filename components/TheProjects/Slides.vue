<template>
   <div class="container">
    <div class="slideImage" 
    :style="setBackgroundImage"
    >
    </div>
    <div class="item-container">

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
}
.container{
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
}
.text{
    font-size: 13px;
    text-align: center;
    padding-top: 10px;
}
.item-container{
    width: 56px;
    height: 10px;
}

</style>
