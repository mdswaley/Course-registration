import { myaxios } from "./Helper";
export const service=(user)=>{
    return myaxios.post('/portal/save',user).then((response)=>response.data)
}
export const login=(loginDetails)=>{
    return myaxios.post('/login',loginDetails).then((response)=>response.data);
}
