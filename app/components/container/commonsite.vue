<template> 
     
    <div class="loves"
        v-if="commonsites && commonsites.status"
    >        
        <div class="site fadeIn"
            v-for="site in sites"
            :key="site.name">    
          <a :href="site.url" 
           target="_blank" >
            <img class="icon" :src="site.icon">          
          </a>          
        </div>  
    </div>

</template>

<script>
import { getCommonsites } from "../../api/commonsites.js"
import { mapGetters } from 'vuex'


export default {
    data() {
        return {
            visilbe: true,
            sites: []            
        }
    },
    computed:{
         ...mapGetters([     
            'commonsites'
        ])       
    },   
    created() {          
        getCommonsites.then(sites => {
            this.sites = sites
        })       
    }
}
</script>

<style lang="scss" scoped>
.loves {
    width: 640px;
    margin-top: 40px;
    
    display: flex;
    flex-wrap: wrap;
    z-index: 4;
    &>.site{
        display: inline-block;
        width: 72px;
        height: 72px;
        margin-right: 18px;
        padding: 10px 0;
        border: 1px solid #eee;
        background: rgba(255,255,255,.84);

        display: flex;
        justify-content: center;
        align-items: center;   
        border-radius: 4px;     
        & >a{

            &>.icon{
                width: 44px;
                height: 44px;
            }   
            &:hover{
                opacity: .74;
            }         
        }
    }
}
 
</style>
