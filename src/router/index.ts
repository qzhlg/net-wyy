
const routes= [
    {
      path: "/home",
      name: "home",
      component: ()=>import ('@/views/home/index.vue')
    },{
        path:'/catelog',
        name:'catelog',
        component:()=>import ('@/views/catelog/index.vue')
    },{
        path:'/topic',
        name:'topic',
        component:()=>import ('@/views/topic/index.vue')
    },{
        path:'/cart',
        name:'cart',
        component:()=>import ('@/views/cart/index.vue')
    },{
        path:'/mine',
        name:'mine',
        component:()=>import ('@/views/mine/index.vue')
    }
  ]
export default routes