import { DoubleProfileImage } from "@components/ProfileImage/ProfileImage";
import Twinkle from "@components/Twinkle/Twinkle";
import mangu from "@assets/images/mangu.jpg";
import mangu2 from "@assets/images/mangu2.jpg";
import styled from "@emotion/styled";


function WalkingHistory(){
    return(
        <StyledDiv>
            <Text fontSize={16} isTitle={true}>최근산책목록</Text>
            <WalkingListWrap>
                <DoubleProfileImage size={42} border={3} img={mangu} img2={mangu2} left={30}/>
                <WalkingListContent>
                    <Text fontSize={14} isTitle={false}>보호자 | 강아지<Date>2023.11.12</Date></Text>
                    <Twinkle avg={40} isClick={true}/>
                </WalkingListContent>
            </WalkingListWrap>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    width: 90%;
    margin: auto;
`

const Text = styled.div<{fontSize:number; isTitle:boolean;}>`
     font-size: ${({ fontSize }) => fontSize+"px"};
     font-weight: 700;
     margin: ${({ isTitle }) => (isTitle? '16px 0px 14px' : '0px 0px 3px')};
`

const WalkingListWrap = styled.div`
     display: flex;
     align-items: flex-end;
     justify-content: space-between;
     width: 100%;
     margin-bottom: 20px;
`
const WalkingListContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`
const Date = styled.span`
    font-size: 12px;
    color: #424242;
    font-weight: 600;
    margin: 7px;
`


export default WalkingHistory;