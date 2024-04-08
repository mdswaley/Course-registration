export const isLoggedIn=()=>{
   let a= localStorage.getItem("data")
   if(a==null){
    return false;
   }
   else{
    return true;
   }
}
export const dologin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next();
}
export const dologout=(next)=>{
    localStorage.removeItem("data")
    next();
}
export const getcurrentuser=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data"))
    }
    else{
        return false;
    }
}