import API from "@api/api";
import URLs from "@api/urls";
import { MatchingCondition, defaultCondition } from "@models/matching";
import { useCallback, useEffect, useState } from "react";



export default function useFetchCondition(){
    const [data, setData] = useState<MatchingCondition>(defaultCondition);
    
    const fetchCondition = useCallback(async () =>{
        const res : MatchingCondition = await API.get(URLs.matching.fetchCondition);
        setData(res);
    },[])
    
    useEffect(()=>{
        fetchCondition();
    },[])

    return {data ,setData};
}