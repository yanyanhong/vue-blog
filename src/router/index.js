import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const List = () => import('../components/NewsList.vue')
const Detail = () => import('../components/NewDetail.vue')
const NOTFOUND = {
    render:(h)=>{
        return h('div','404error')
    }
}
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/list',
      component: List,
      beforeEnter:(to,from ,next)=>{
          console.log("/list beforeEnter =>")
          next()
      },
      meta:{
          title:'新闻列表'
      }
    },
    { path: '/detail/:id', name:'detail',component: Detail ,props:true,
        meta:{
            title:'新闻详情'
        }
    },
    {path:'*',component:NOTFOUND,
        meta:{
            title:'404error'
        }    
    }
  ]
  
  // 3. 创建 router 实例，然后传 `routes` 配置
  // 你还可以传别的配置参数, 不过先这么简单着吧。
  const router = new VueRouter({
    mode:'history',
    routes, // (缩写) 相当于 routes: routes
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        // return { x: 0, y: 100 }
        //alert(JSON.stringify(savedPosition))
        if (savedPosition) {
            return savedPosition
          } else {
            return { x: 0, y: 0 }
          }
      }
  })




  router.beforeEach((to ,from ,next) => {
      console.log("beforeEach");
      if(to.meta.title){
          document.title = to.meta.title
      }
      next();
  })
  router.afterEach((to,from) => {
      console.log("afterEach");
  })


  export default router;
  