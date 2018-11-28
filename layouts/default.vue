<template>
  <div>
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
    <nuxt/>
  </div>
</template>


<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheCallback from '@/components/TheCallback/TheCallback.vue'
import TheProjects from '@/components/TheProjects/TheProjects.vue'
import TheFloorCoverings from '@/components/TheFloorCoverings/TheFloorCoverings.vue'
import TheContacts from '@/components/TheContacts/TheContacts.vue'
import TheFooter from '@/components/TheFooter/TheFooter.vue'
import TheMap from '@/components/TheMap/TheMap.vue'

export default {
  components: {
    TheHeader,
    TheCallback,
    TheProjects,
    TheFloorCoverings,
    TheContacts,
    TheFooter,
    TheMap
  }
}
</script>
<style>
.main-index {
 /* padding: 50px 330px 0px 0px; */
 font-size: 28px;
 /* position: relative; */
 /* left: 17%; */
 max-width: 880px;
 margin-top: 70px;
}

.wrapper{
  display: flex;
  justify-content: center;
  
}
</style>
