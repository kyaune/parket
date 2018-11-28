<template>
    <div class="slides">
{{image.name}}
    SLIDES
    <div class="slideImage">

    </div>
    </div>
</template>
<script>
export default {
    props : ["image"]
}
</script>
<style scoped>
.slides{

}
.slideImage{
    background-position: center;
    background-size: cover;
    background-image: url("/1.jpg")
}

</style>
