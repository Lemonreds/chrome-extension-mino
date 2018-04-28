<template>
  <div>
    <div    class="background"
            v-if="bing && bing.status"            
            :style="backgroundImage"           
            />
    <div class="background" 
            v-else :style="setBackgroundColor"     
    > </div>
   </div>
   
</template>

<script>
import { mapGetters } from 'vuex'
import { saveBase64}  from '../../api/base64.js'

export default {
    props:{
        background:{
            type: Object,
            required: true
        }
    },        
    computed:{       
        backgroundImage :function(){
            let style = {}

            this.bing.inital ? style.backgroundImage = `url(${this.background.base64})`
                             : style.backgroundImage = `url(${this.background.url})`

            return style
        },
        setBackgroundColor:function(){
           
           return {
               background : this.color,
               opacity : 0.84
           }
        },
        ...mapGetters(['bing','color'])
    }
  
}
</script>

<style lang="scss" scoped>
.background{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;  
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
