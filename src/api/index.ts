import instence from "@/utils/request";
import instance from "@/utils/request";
import { __awaiter } from 'tslib';
// 获取分类页初始化信息数据
const getHomeData = async () => {
  const result = await instence.get("/catalog/index");
  return result;
};
// 获取当前分类信息和子分类
const getChildData = async (id: any) => {
  const result = await instence.get("/catalog/current", {
    params: {
      id: id
    }
  });
  return result;
};
// 获取分类详情数据
const getCategory = async (id: any) => {
  const result = await instance.get("/goods/category", {
    params: {
      id: id
    }
  });
  return result;
};
// 商品信息
const getgoodsMessage = async (id: any) => {
  const result = await instance.get("/goods/list", {
    params: {
      categoryId: id,
      page: 1,
      size: 1000
    }
  });
  return result;
};
// 获取商品查询的相关信息
const getgoodSearch = async () => {
  const result = await instance.get("/search/index");
  return result;
};
// 获取商品信息详情
const getgoosDetail = async (id: any) => {
  const result = await instance.get("/goods/detail", {
    params: {
      id: id
    }
  });
  return result;
};
// 获相关取商品信息
const getAcount=async (id:any)=>{
    const result =await instance.get('/goods/related',{
        params:{
            id:id
        }
    })
    return result
}
// 登录接口
const loginMethod = async (params: any) => {
  return await instence.post("/auth/loginByMobile", params);
};
// 用户地址数据
const userAddress = async () => {
  const result = await instence.get("/address/list");

  return result;
};
// 获取专题数据
const getData = async () => {
  const result = await instance.get("/topic/list");

  return result;
};
// 首页数据
const getList = async () => {
  const result = await instance.get("/");
  return result;
};
// 首页 品牌详情
const getbrandDetail=async (id:any)=>{
    const result =await instance.get('/brand/detail',{
        params:{
            id:id
        }
    })
    return result
}
const getbrandList=async (id:any)=>{
    const result=await instance.get('/goods/list',{
        params:{
            brandId:id,
            page:1,
            size:10000
        }
    })
    return result
}
const getDetail = async (id: any) => {
  const result = await instance.get("/topic/detail", {
    params: {
      id: id
    }
  });
  return result;
};
export {
  getHomeData,
  getChildData,
  getCategory,
  loginMethod,
  getgoodsMessage,
  getgoodSearch,
  getgoosDetail,
  userAddress,
  getData,
  getAcount,
  getList,
  getDetail,
  getbrandDetail,
  getbrandList
};
