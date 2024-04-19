import ButtonSelect from "@components/Input/ButtonSelect"
import { ACTIVITY } from "@constants/profile"
import styled from "@emotion/styled"
import { MatchingCondition } from "@models/matching"
import { Dispatch, SetStateAction } from "react"


type Props = {
    condition : MatchingCondition,
    setCondition : Dispatch<SetStateAction<MatchingCondition>>
}

export default function DogCondition( {condition, setCondition} : Props){
    function handleChangeActivate( idxArr: number[]){
        const activate = idxArr.map((i)=>ACTIVITY[i]);
        console.log(activate);
        
        console.log(condition.amountOfActivity);
        setCondition((prev) => ({...prev, amountOfActivity:activate[0] }))
    }



    return (<>
        {condition.amountOfActivity}
       <ButtonSelection 
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="활동량" 
        isDuplicate={false} 
        maxSelection={1} 
        buttonList={ACTIVITY} 
        value={[ACTIVITY.findIndex((v)=> v===condition.amountOfActivity)]} 
        onChangeButton={handleChangeActivate} />
    </>)
}


const ButtonSelection = styled(ButtonSelect)`
  width: 100%;
`;