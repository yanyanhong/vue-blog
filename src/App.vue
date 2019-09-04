<template>
  <div id="app">

      <keep-alive include="news-list">
          <router-view></router-view>
      </keep-alive>
  </div>
</template>
<script>
// import NewsList from './components/NewsList'
export default {
  name: 'app',
  data:()=>({

  }),
  computed:{
    
  },
  created(){
    
  },
  mounted(){
    
  },
  methods:{
    
  },
  components:{
    // 'news-list':NewsList
  }

}
</script>

<style>
html{
  font-size:calc(100vw/7.5)
}
html,body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
