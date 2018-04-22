<template>
    
    <div class="item">   
        <i 
            @click="settingHanlder"
            class="material-icons"
            >{{option.icon}}</i>
      <transition name="top">
        <div 
            v-if="visible"
            class="setting dialog">      
           
            <Featrues
              :featrues = "featrues"
            />     
            <Background/>
            
            <More/>
            <span 
                class="close"
                @click.stop="close"            
            >Dismiss.</span>   


        </div>  
      </transition>
    </div> 
   
</template>

<script>
import Featrues from "./featrues.vue"
import Background from './background.vue'
import More from './more.vue'
import { mapGetters } from 'vuex'


export default {
  props: {
    option: {
      type: Object,
      require: true
    },
    visible: {
      type: Boolean,
      require: true
    }
  },
  components: {
    Featrues,Background,More
  },
  computed:{
      ...mapGetters(['featrues'])
  },
  methods: {
    close() {
      this.$emit("close", "setting");
    },
    settingHanlder() {
      this.$emit("settingHandler");
    } 
  }
}
</script>
