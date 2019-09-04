<template>
    <div class="container">

        <Promised :promise="newsPromise">
            <!-- Use the "pending" slot to display a loading message -->
            <template v-slot:pending>
            <p>Loading...</p>
            </template>
            <!-- The default scoped slot will be used as the result -->
            <template v-slot="data">
                <!-- <button @click='add'>增加数据</button> -->
                <div  class="wrapper" ref="wrapper">
                    <ul>
                        <new-item v-for="item in data" :key="item.id" :item="item"></new-item>
                    </ul>
                </div>
            </template>
            <!-- The "rejected" scoped slot will be used if there is an error -->
            <template v-slot:rejected="error">
                <p>Error: {{ error.message }}</p>
            </template>
        </Promised>
    </div>
    
   
    
   
</template>

<script>
import NewItem from './NewItem'
import axios from 'axios';
import BScroll from 'better-scroll'

export default {
  name: 'news-list',
  data(){
    return {
        newsPromise:[],
        newslist :[]
    }
  },
  computed:{
    
  },
  watch:{
    
  },
  created(){
      let that = this;
      this.newsPromise = fetch("http://192.168.0.15:3000/list").then(res=>res.json())
  },
  mounted(){
    
  },
  activated(){
      console.log("list activated")
  },
  deactivated(){
      console.log("list deactivated")
  },
  beforeDestroy(){
      this.bscroll = null;
  },
  methods:{

  },
  components:{
      NewItem
  }

}
</script>

<style>
    .container{
        position: relative;
    }
    .container button{
        position: fixed;
        z-index: 3;
    }
    .wrapper{
        width:100vw;
        /* height:calc(100vh -20px); */
        height:100vh
    }
    ul{
        margin: 0;
        padding:0;
    }
</style>
