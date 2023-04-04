import { myAxios } from "./helper";

export const signUp = async(user)=>{
    return myAxios.post("userservice/api/v1/auth/register",user)
    .then((response)=>response.data) 
}

export const signIn = async(user)=>{
    return myAxios.post("/userservice/api/v1/auth/authenticate",user)
    .then((response)=>response.data)
}

export const adminSignUp = async(admin)=>{
    return myAxios.post("adminservice/api/v1/auth/register",admin)
    .then((response)=>response.data) 
}

export const adminSignIn=async(admin)=>{
    return  myAxios.post("/adminservice/api/v1/auth/authentication",admin)
    .then((response)=>response.data)
}

