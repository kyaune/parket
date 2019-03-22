
<template>
<div class="container">
  <div class="wrapper">
    <div class="main-index">
    <TheHeader/>
    <TheCallback/>
    <TheProjects/>
    <TheFloorCoverings/>
    <TheContacts/>
    <TheMap/>
    </div>
  </div>
  <TheFooter/>
</div>
</template>

<script>
// import TheHeader from '@/components/TheHeader/TheHeader.vue'
// import TheCallback from '@/components/TheCallback/TheCallback.vue'
// import TheProjects from '@/components/TheProjects/TheProjects.vue'
// import TheFloorCoverings from '@/components/TheFloorCoverings/TheFloorCoverings.vue'
// import TheContacts from '@/components/TheContacts/TheContacts.vue'
// import TheFooter from '@/components/TheFooter/TheFooter.vue'
// import TheMap from '@/components/TheMap/TheMap.vue'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
// require('@/components/reset.css')

export default {
  components: {
    // TheHeader,
    // TheCallback,
    // TheProjects,
    // TheFloorCoverings,
    // TheContacts,
    // TheFooter,
    // TheMap
  },
  // data () {
  //   return { story: { content: {} } }
  // },
  // mixins: [storyblokLivePreview],
  // asyncData (context) {
  //   let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
  //   return context.app.$storyapi.get('cdn/stories/home', {
  //     version: version
  //   }).then((res) => {
  //     return res.data
  //   }).catch((res) => {
  //     context.error({ statusCode: res.response.status, message: res.response.data })
  //   })
  // }
}

</script>

<style>

.container{
 width: 100%;
 margin-left: 0px;
 margin-right: 0px; 
 padding-left: 0px;
 padding-right: 0px;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 line-height: 1.3;
}

.main-index {
 font-size: 28px;
 max-width: 880px;
 margin-top: 70px;
 /* margin-left: 20%; */
}

.wrapper{
  display: flex;
  justify-content: center;
}
</style>
