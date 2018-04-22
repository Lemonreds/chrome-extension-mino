<template>
  <transition name="right-in-left-out">
    <div class="box"
        v-show="show"
    >
        <img :src="background.url" >
        <span>{{formatDate}}</span>

        <span
            v-for="(c,idx) in formatCopyRihgt"
            :key="idx">{{c}}</span>

    </div>
  </transition>
</template>

<script>
export default {
    props:{
        show:{
            type: Boolean,
            required: true
        },
        background:{
            type : Object,
            required: true
        }        
    },
    computed:{
        formatDate: function (){    

            return this.background.date
        },
        formatCopyRihgt: function (){
            let cpr = this.background.copyright
            if(cpr){
                cpr = cpr.split('，')
            }
            return cpr
        }
    }
  
}
</script>

<style lang="scss" scoped>
.box{
    width: 400px;
    height: 50vh;
    position: fixed;
    right: 5px;
    bottom: 60px;   
    background: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    & >img{    
        width: 100%;
        height: 34vh;
        padding: 6px;
    }
    & >span{
        display: block;
        margin: 2px 0 4px;
        color: #252b32;
    }
}

</style>
