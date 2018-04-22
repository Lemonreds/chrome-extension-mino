<template>
  <div>
       <h3 class="title">Features</h3>     

            <div 
                class="item"
                v-for="(item,idx) in featrues"
                :key="item.name">   
                <span>{{item.name}}</span>
                <Choose
                    :id = "idx"
                    :initial="item.status"
                    @hanlder='featruesHanlder'
                ></Choose>
            </div>
  </div>
</template>

<script>
import Choose from "../common/choose.vue"
export default {
    props:{
        featrues :{
            type : Object,
            defaults: {}
        }
    },
    methods:{        
        featruesHanlder(idx, status) {
            let item = this.featrues[idx]       
            this.$store.dispatch('modifyFeatrues',{type: item.name, value: status})     
        }  
    },
    components:{
        Choose
    }
  
}
</script>


<style lang="scss" scoped>

</style>
