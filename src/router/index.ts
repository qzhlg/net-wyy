const routes = [
  {
    path: "/",

    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    autorization: false,
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue")
  },
  {
    path:'/brandDetail/:bid',
    name:'gobrandDetail',
    component:()=>import ('../views/brandDetail/index.vue')
  },
  {
    path: "/catelog",
    name: "catelog",
    component: () => import("../views/catelog/index.vue")
  },
  {
    path: "/goodSearch",
    name: "goodSearch",
    component: () => import("../views/goodSearch/index.vue")
  },
  {
    path: "/categorys/:id",
    name: "categorys",
    component: () => import("../views/categorys/index.vue")
  },
  {
    path: "/goods/:id",
    name: "goods",
    component: () => import("../views/goods/index.vue")
  },
  {
    path: "/topic",
    name: "topic",
    component: () => import("../views/topic/index.vue")
  },
  {
    path: "/toppicdetail/:id",
    name: "toppicdetail",
    component: () => import("@/views/Topicdetial/index.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart/index.vue")
  },
  {
    path: "/mine",
    name: "mine",
    meta: {
      autorization: true
    },
    component: () => import("../views/mine/index.vue")
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
    },
    {
        path:'/toppicdetail/:id',
        name:'toppicdetail',
        component:()=>import ('@/views/Topicdetial/index.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: ()=>import ('../views/cart/index.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        
        component: ()=>import ('../views/mine/index.vue')
    },
    {
      path:'/collect',
      name:'collect',
      component: ()=>import ('../views/collect/index.vue')
    },{
      path:'/address',
      name:'address',
      component:()=>import ('../views/address/index.vue')
    },
    {
        path:'/getCommentlist/:id',
        name:'getCommentlist',
        component:()=>import ('../views/topicComment/index.vue')
    },{
        path:'/topicMore',
        name:'topicMore',
        component:()=>import('../views/topicMore/index.vue')
    }
];
export default routes;
