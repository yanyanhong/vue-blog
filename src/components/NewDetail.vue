<template>
    <div class="page">
        
        <Promised :promise="detailPromise">
            <!-- Use the "pending" slot to display a loading message -->
            <template v-slot:pending>
            <p>Loading...</p>
            </template>
            <!-- The default scoped slot will be used as the result -->
            <template v-slot="data">
                <div v-title>{{data && data.title}}</div>
                <div>{{data && data.detail}}</div>
            </template>
            <!-- The "rejected" scoped slot will be used if there is an error -->
            <template v-slot:rejected="error">
                <p>Error: {{ error.message }}</p>
            </template>
        </Promised>
        <v-chart :options="option" theme="dark"/>
    </div>
    
</template>

<script>
import { setInterval, clearInterval } from 'timers';

export default {
  name: 'new-detail',
  props:['id'],
  data(){
      return {
          detailPromise:Promise.resolve(),
          option : {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 7, 20]
            }]
        }
      }
  },
  computed:{
      
  },
  watch:{
      'id':{
          handler:'getData',
          immediate:true
      }
  },
  directives:{
      title:{
          inserted(el){
              document.title = el.innerText;
          }
      }
  },
  beforeRouteEnter:(to,from,next)=>{
      console.log("detail beforeRouteEnter")
    //   next(vm =>{
    //       vm.getData();
    //   })
      next()
  },
  beforeRouteUpdate:(to,from,next)=>{
      console.log("detail beforeRouteUpdate")
      next()
  },
  beforeRouteLeave:(to,from,next) =>{
      console.log("detail  beforeRouteLeave")
      next();
  },
  created(){
    this.myWorker = this.$worker.create([
        {message: 'message1', func: (arg) => {
            console.log("大量计算")


            postMessage(`Output 1 ${arg}`)
        }},
        {message: 'message2', func: () => 'Output 2'}
    ])

    this.myWorker.postMessage('message1', ['Boop!'])
    .then(result => {
      console.log(result)
    })


      console.log(this.$router,this.$route)
       var cc = [];
       function AA(name){
           this.name = name
       }
       
    //    this.inter = setInterval(function BB(){
    //        var deactivatedNodes = []
    //        cc.push(new Array(10000).fill(new AA('yanhong')))
    //        cc.push(new Array(10000).join('x'))
    //        var ul = document.createElement('ul');
    //        for(let i=0;i<100;i++){
    //            ul.appendChild(document.createElement('li'))
    //        }
    //        deactivatedNodes.push(ul);
    //     //    cc = [];
    //     //    deactivatedNodes = []
    //    },500)
  },
  
  activated(){
       console.log("detail activated")
      
  },
  deactivated(){
      console.log("detail deactivated")
    //   clearInterval(this.inter)
  },
  methods:{
      getData(){
        this.detailPromise = fetch("http://192.168.0.15:3000/detail?id="+this.id).then(res=>res.json())
      }
  }

}
</script>

<style>
    .page{
        width:100vw;
        height:100vh;
    }
    .page .echarts {
        width: 100%;
        height: 100%;
        transform: translateZ(20)
    }
    .item{
        border-bottom:1px solid cyan;
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
