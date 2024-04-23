
import API from "@api/api";
import ProfileDetailModal, { BottomButton, ProfileDetail } from "@containers/common/ProfileDetailModal";
import styled from "@emotion/styled";
import useFetchCondition from "@hooks/mathcing/useFetchCondition";
import useFetchMatching from "@hooks/mathcing/useFetchMatchings";
import Navigator from "@layouts/Navigator";import RoundHeader from "@layouts/RoundHeader";
import { useEffect, useState } from "react";


export default function Matching() {
  const {data:condition}=useFetchCondition();
  const [isStart, setIsStart] = useState(false);
  const [Matchings,setMatching] = useState();
  const [members,setMembers] =useState( ["zkdlwjsxm@example.com"]) 
  

  return (
    <>
      <RoundHeader />
            {!isStart&& <Container> <Circle onClick={()=>{setIsStart(true)}}>MATCHING</Circle>
        </Container>}
            {isStart&& members.map((val, i)=>{
              return <>
                <ProfileDetail key={i} friendId={val} />
                <BottomButton friendId={val}/>
              </>
            })  }
      <Navigator/>
    </>
  );
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

`

const Circle = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    border-radius: 50%;
    width: 300px;
    height: 300px;
`




const MatchingProfiles = ()=>{

  return <></>
}