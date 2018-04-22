<template>
    <div>
          <h3 class="title">Background</h3> 
            <div class="item"
                :style="getDelayAnimation"
            >       
                <span>Bing</span>
                <Choose 
                v-if='bing'
                :initial='bing.status'
                @hanlder='bingHanlder'/>                          
           </div>          
           <h3 class="title">Pure</h3>
           <ul class="pure">
               <li                      
                    v-for="(color,idx) in pure"
                    :key="idx"
                    :style="background(color)"
                    @click="colorHanlder(color)"
                    >
               </li>
           </ul>

    </div>
</template>

<script>
import Choose from "../common/choose.vue"
import { mapGetters } from 'vuex'
import { colors } from '../../api/setting.js'

export default {
    data(){
        return{                
            pure:[]
        }
    },
    created(){ 
        this.pure = colors
    },
    components:{
        Choose
    }, 
    computed:{              
        ...mapGetters(['bing'])
    },    
    methods:{
        background(color){
            return{
                background : color 
            }
        },
        bingHanlder(id,status){     
            this.$store.dispatch('moidfyBing',{
                type: 'bing',
                value: status
            })
        },
        colorHanlder(color){
            //reset bing 
            this.bingHanlder(0,false)
            // change to color 
            this.$store.dispatch('modifyColor',color)
        },        
        getDelayAnimation(){           
            console.log(66)
            return {
                'animationDelay' :  '0.6s'
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.pure{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 22px;
    margin: 2px 0;
    & >li{
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: 0 4px;
        border: 1px solid #eee;
        border-radius: 2px;
    }
}
</style>
