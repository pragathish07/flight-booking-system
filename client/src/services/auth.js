import { getUserData, removeUserData } from "./storage"


export const isAuthenticated = ()=>{
    return getUserData()!=null?true:false;
}

export const logout = ()=>{
    removeUserData();
}