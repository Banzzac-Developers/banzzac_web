import SvgSelector from "@components/Svg/SvgSelector";
import TagDefault from "@components/Tag/TagDefault";
import styled from "@emotion/styled";
import useModal from "@hooks/common/useModal";
import { MatchingCondition } from "@models/matching";
import ConditionScreen from "@pages/Matching/ConditionScreen";
import { Dispatch, SetStateAction } from "react";

export type MatchingConditionProps = {
  conditionData : MatchingCondition,
  setConditionData : Dispatch<SetStateAction<MatchingCondition>>,
}

export default function RoundHeader({conditionData , setConditionData} : MatchingConditionProps) {
  const {addModal} = useModal();
  const handleConditionScreen = (data : MatchingCondition) =>{
    addModal({
      type : "fullscreen",
      props : {
        contents :<ConditionScreen conditionData={data} setConditionData={setConditionData}/>,
        hasCloseButton : true,
      }
    })
  }

  return (
    <Header onClick={()=>{handleConditionScreen(conditionData)}}>
      <Wrapper>
        <SvgSelector svg={"dogFace"} width={24} height={24} stroke="#212121" />
        <div>
          {
            conditionData.dogNature.map((v,i)=><TagDefault key={i} txt={v}/>)
          }
          
        </div>
      </Wrapper>
      <Wrapper>
        <SvgSelector svg={"face"} width={24} height={24} stroke="#212121" />
        <div>
        {
            conditionData.walkingStyle.map((v,i)=><TagDefault key={i} txt={v}/>)
          }
        </div>
      </Wrapper>
    </Header>
  );
}

const Header = styled.header`
  border-bottom: 1px solid #212121;
  border-radius: 0px 0px 16px 16px;
  box-shadow: 0px 4px 4px 0px #00000026;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
`;
