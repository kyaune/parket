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
.container{
 width: 100%;
 margin-left: 0px;
 margin-right: 0px; 
 padding-left: 0px;
 padding-right: 0px;
 font-family: sans-serif;
 
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
