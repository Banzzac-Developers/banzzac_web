import API from "@api/api"
import URLs from "@api/urls"
import { Dataform} from "@models/search"
import { useEffect, useState } from "react"

export default function useSearchMember(locations:any){
    const [data,setData]=useState<Dataform[]>()
    console.log("들어와라이~");
    
    const getMembers=async ()=>{
        const res:Dataform[]=await API.post(URLs.search.searchMember,locations)
        setData(res)
    }

    useEffect(()=>{
        getMembers()
    },[locations])

    return {data}
}