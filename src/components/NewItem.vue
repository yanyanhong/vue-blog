<template>
    <router-link :to="{name:'detail',params:{'id': item.id}}">
        <div class="item">
            <img v-lazy :data-src="item.thumb" alt="" class="lazy">
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
        </div>
    </router-link>
    
</template>

<script>

export default {
  name: 'new-item',
  props:{
     item:{
         type:Object,
         required:true
     }
  },
  
  computed:{
    
  },
  created(){
      
      
  },
  mounted(){
    
  },
  directives:{
      lazy:{
          inserted(el){
                el.io = new IntersectionObserver((entries) =>{
                    console.log(entries)
                    entries.forEach(change =>{
                        if(entries[0].intersectionRatio > 0 ){
                            let img = change.target;
                            img.src = img.dataset.src;
                            el.io.unobserve(img);
                            // el.io = null;
                        }
                    })
                })
                el.io.observe(el)
          }
      }
  },
  methods:{
    
  }

}
</script>

<style scoped>
    .item{
        border-bottom:1px solid #eeeeee;
        position: relative;
    }

    .item::after{
        content:'*';
        position: absolute;
        width:10px;
        height:10px;
        top:0;
        right:20px;
        
    }
    img{
        width:100%;
    }
    .title{
        font-size:.3rem;
        color:black;
    }
    .desc{
        font-size: .24rem;
        color:rgb(26, 24, 24);
    }
</style>
