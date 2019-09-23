import instance from '@/utils/request'


const getData = async()=>{
    const result= await instance.get('/topic/list')
    console.log(result)
    return result
}

const getList=async()=>{
    const result=await instance.get('/')
    return result
}


export {
    getData,
    getList
}



