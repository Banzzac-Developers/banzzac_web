import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import SvgSelector from "@components/Svg/SvgSelector";

type Props = {
    isClick ?:boolean,
    size ?: number,
    avg :number;
}


export default function Twinkle({isClick=false, size=23, avg}:Props){
    const [twinkle, setTwinkle] = useState<boolean[]>([false,false,false,false,false])
    
    useEffect(()=>{
        const cnt:number = avg/10;
        const copy = [...twinkle];
        for (let index = 0; index < twinkle.length; index++) {
            if(index < cnt){
                copy[index]=true;
            }
        }
        setTwinkle(copy);
    },[])


    function changeTwinkle(cnt : number){
        const copy = [...twinkle];
        for (let index = 0; index < twinkle.length; index++) {
            if(index <= cnt){
                copy[index] = true;
            }else{
                copy[index] =false;
            }
        }
        setTwinkle(copy);
    }


    return (
        <Container>
            {
                twinkle.map((element,i)=>{
                    return (
                        <>
                            {isClick && <Box key={i} onClick={()=>{changeTwinkle(i)}}>
                                {element?<SvgSelector  svg="fillTwinkle" key={i} width={size} height={size} stroke="#212121" /> : <SvgSelector key={i} svg="twinkle" width={size} height={size} stroke="#212121" />}
                            </Box>}
                            {!isClick && <Box key={i}>
                                {element?<SvgSelector svg="fillTwinkle" key={i} width={size} height={size} stroke="#212121" /> : <SvgSelector key={i} svg="twinkle"  width={size} height={size} stroke="#212121" />}
                            </Box>}
                        </>
                        
                    );
                })
            }
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box=styled.div``