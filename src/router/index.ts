
const routes= [
    {
        path:'/',
        redirect:'/login'
    },
    {
      path: "/home",
      name: "home",
      component: ()=>import ('@/views/home/index.vue')
    },
    {
        path:'/catelog',
        name:'catelog',
        component:()=>import ('@/views/catelog/index.vue')
    },
    {
        path:'/topic',
        name:'topic',
        component:()=>import ('@/views/topic/index.vue')
    },
    {
        path:'/cart',
        name:'cart',
        component:()=>import ('@/views/cart/index.vue')
    },
    {
        path:'/mine',
        name:'mine',
        component:()=>import ('@/views/mine/index.vue')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import ('@/views/login/login.vue')
    },
  ];
export default routes;
