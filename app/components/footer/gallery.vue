<template>
  <transition name="scale">
    <div class="gallery">
        <div class="bing">        
            <span>Images from Bing.</span>
        </div>

        <ul class="images">
            <li class="item"
                v-for="image in images"
                :key="image.name"
                :style="backgroundImage(image.url)"
            >             
                <i  @click="setImage(image)"
                     class="material-icons">photo
                </i>
                
                <span>{{image.date}}</span>
                <p> {{image.copyright}}</p>
                 
            </li>
        </ul>  
    </div>
  </transition>
</template>

<script>

export default { 
  props:{
     images: {
         type: Array,
         required: true
     }
  }, 
  methods:{
      backgroundImage :function(src){
           return {
              backgroundImage: `url(${src})`
           }    
      },
      setImage: function(image){
          this.$emit("setImage",image)
      }
  }
}
</script>

<style lang="scss" scoped>
.gallery{
    position: fixed;
    width: 860px;
    height: 510px;
    top: 50%;
    left: 50%;
    margin-left: calc(-860px/2);
    margin-top: calc(-510px/2);
    background: #fff;
    padding: 20px;
    border-color: rgba(0,0,0,.2);
    color: #3b444f;
    box-shadow: 0 2px 10px rgba(0,0,0,.2);    
    border-radius: 4px;  
}
.bing{
    font-size: 18px;
    margin-bottom: 16px;
    text-align: center;
}
.images{    
    display: flex;
    flex-wrap: wrap;  

    & >.item{
        width: 202px;
        height: 202px;
        margin-right: 2px;
        margin-bottom: 4px;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        text-align: center;
        cursor: pointer;
        position: relative;
        transition: all .2s ease-in-out;
        &>span{
           line-height: 162px;
           color: #fff;
           opacity: 0;
        }
        &>p{       
            position: absolute;
            bottom: 10px;
            left: 0;
            width: 100%;
            max-height: 49%;

            font-size: 12px;
            color: #fff;
            opacity: 0
        }
        &>i{
            position: absolute;
            right: 8px;
            top: 8px;
            width: 20px;
            height: 20px;
            color: #fff;
            opacity: 0;
            z-index: 9;
        }
        &:hover{
            opacity: .91;
            &>span ,&>p,&>i{
                opacity: 1;
            }
        }
    }
}
</style>
