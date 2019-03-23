<template>
   <section class="util__container">
    <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component> -->
  </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
export default {
  data () {
    return { story: { content: {} } }
  },
  // mixins: [storyblokLivePreview],
  asyncData (context) {
    return context.app.$storyapi
    .get('cdn/stories/home', {
      version: context.isDev ? "draft" : "published"
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
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
