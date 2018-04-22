<template>
  <div class="container">    
        <Search />
        <LovesSites />    
  </div>
</template>

<script>

import Search from './container/search.vue'
import LovesSites from './container/lovesites.vue'

export default {  
  components: {
    Search,LovesSites
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100vh - 120px);
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
}
</style>
