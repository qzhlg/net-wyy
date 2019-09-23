export function setStorage(key: string,value: any):void{
    return window.localStorage.setItem(key,value)
}
export function getStorage(key:string){
    return window.localStorage.getItem(key)
}