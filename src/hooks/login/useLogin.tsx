import API from "@api/api";
import URLs from "@api/urls";
import { useCallback } from "react";






export default function useLogin(){

    const checkLogin = useCallback(async (id:string, pwd:string)=>{
        const res = await API.post(URLs.login.checkLogin,{id:id,pwd:pwd})
        console.log("use 안 ");
        console.log(res.accessToken);
        
        sessionStorage.setItem("jwtToken",res.accessToken);
        
        return res;
    },[])


    return {checkLogin}
}