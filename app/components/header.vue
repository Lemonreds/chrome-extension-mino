<template>
    <header class='header'>
        <div class="options">    
        
            <Application
                    :option="options.application"
                    :visible="dialog.application"  
                    v-show="application && application.status"
                    @applicationHandler="handler('application')"
                    @close="closeDialog"            
            />
            <Bookmark                
                    :option="options.bookmark"
                    :visible="dialog.bookmark"  
                    v-show="bookmark && bookmark.status"
                    @bookmarkHandler="handler('bookmark')"
                    @close="closeDialog" 
            />     
             <Setting                     
                    :option="options.setting"
                    :visible="dialog.setting" 
                    @settingHandler="handler('setting')"
                    @close="closeDialog"                 
            />         
          
        </div>
    </header>
</template>

<script>
import Setting from './header/setting.vue'
import Bookmark from './header/bookmark.vue'
import Application from './header/application.vue'
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            options:{
                application:{
                    name : 'application',
                    icon : 'apps'
                },
                bookmark:{
                    name : 'bookmark',
                    icon : 'turned_in_not'
                },
                setting:{
                    name : 'setting',
                    icon : 'settings'
                }
            },
            dialog:{
                application: false,
                bookmark: false,
                setting: false
            }           
        }
    },    
    components:{
        Setting,Bookmark,Application
    },  
    computed:{
         ...mapGetters([
             'application',     
             'bookmark'
        ])       
    },  
    methods:{
        handler(name){                
            for(let type in this.dialog){
                type === name ? 
                this.$set(this.dialog,type,!this.dialog[type]) : 
                this.$set(this.dialog,type,false)
            }              
        },
        closeDialog(name){
            this.$set(this.dialog,name,false)
        }       
    }
}
</script>

<style lang="scss">
.header{
    width: 100%;
    height: 60px;
    padding: 16px 24px 0 24px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    & >.options{
        text-align: center;
        & >.item{
            position: relative;
            display: inline-block;
            width: 32px;
            height: 32px;
            margin: 0 4px;
            line-height: 32px; 
          
            cursor: pointer;      
                
        }
    }
}

</style>
