
const routes= [
    {
        path:'/',
        
        redirect:'/login'
    },
    {
        path: '/login',
        name: 'login',
        autorization:false,
        component: ()=>import ('../views/login/login.vue')
    },
    {
      path: "/home",
      name: "home",
      component: ()=>import ('../views/home/index.vue')
    },
    {
        path: '/catelog',
        name: 'catelog',
        component: ()=>import ('../views/catelog/index.vue')
    },
    {
        path: '/goodSearch',
        name: 'goodSearch',
        component: ()=>import ('../views/goodSearch/index.vue')
    },
    {
        path: '/categorys/:id',
        name: 'categorys',
        component: ()=>import ("../views/categorys/index.vue")
    },
    {
        path: '/goods/:id',
        name: 'goods',
        component: ()=>import ('../views/goods/index.vue')
    },
    {
        path: '/topic',
        name: 'topic',
        component: ()=>import ('../views/topic/index.vue'),
       
       
    },{
        path:'/topic',
        name:'topic',
        component:()=>import ('@/views/topic/index.vue')
    }
    {
        path: '/cart',
        name: 'cart',
        component: ()=>import ('../views/cart/index.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        meta:{
            autorization:true
        },
        
        component: ()=>import ('../views/mine/index.vue')
    },

  ];
export default routes;
