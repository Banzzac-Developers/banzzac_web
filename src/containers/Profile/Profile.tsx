import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import { Badge } from "@components/Badge/Badge";
import TemperatureBar from "@components/TemperatureBar/TemperatureBar";
import styled from "@emotion/styled";
import mangu from "@assets/images/mangu.jpg";
import SvgSelector from "@components/Svg/SvgSelector";


function MyProfile(){
    return(
        <StyledComponent>
            <SingleProfileImage size={199} border={5} img={mangu} borderColor='#757575'/>
            <MyStyle oneSentence={false}>
                <Badge bold={true} txt="MBTI"/>
                <Badge bold={true} txt="20대 중반"/>
                <Badge bold={true} txt="많이걷는"/>
            </MyStyle>
            <MyStyle oneSentence={true}><Text bold={true} color="#757575">자기소개 한마디</Text></MyStyle>
            <Box display={false} height={113}>
                <Text bold={false} color="#222222">지금 닉네임님의 반짝온도는?</Text>
                <TemperatureBar/>
            </Box>
            <Box display={true} height={80}>
                <IconBox>
                    <p>6</p>
                    <BoxText>주간 산책 횟수</BoxText>
                </IconBox> 
                <IconBox>
                    <p>40</p>   
                    <BoxText>평균 산책 시간</BoxText>
                </IconBox> 
                <IconBox>
                    <p>리뷰</p>
                    <BoxText>리뷰조회</BoxText>
                </IconBox> 
            </Box>
            <Box display={true} height={80}>
                <IconBox>
                    <SvgSelector svg="payment" height={25} width={25} stroke={"#A86EFA"}/>
                    <BoxText>매칭권 구매</BoxText>
                </IconBox>    
                <IconBox>
                    <SvgSelector svg="paymentHistory" height={25} width={25} stroke={"#A86EFA"}/>
                    <BoxText>구매내역</BoxText>
                </IconBox>               
            </Box>
        </StyledComponent>
    )
}
const StyledComponent = styled.div`
    align-items: center;
    width: 90%;
    margin: auto;
`

const MyStyle = styled.div<{oneSentence:boolean}>`
    display: flex;
    justify-content: ${({ oneSentence }) => (oneSentence? 'center':'space-evenly')};
    align-items: center;
    height: ${({ oneSentence }) => (oneSentence && '39px')};
    margin: ${({ oneSentence }) => (oneSentence && '7px 0px 15px')};
`
const Text = styled.p<{bold:boolean, color:string}>`
    font-size: 16px;
    font-weight: ${({ bold }) => (bold? 700 : 600)};
    color: ${({ color }) => color};
`
const Box = styled.div<{height:number, display:boolean}>`
    height: ${({ height }) => height+"px"};
    border-radius: 16px;
    border: 2px solid #212121;
    display: ${({ display }) => (display && 'flex')};
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 5% 0 5%;
`
const BoxText = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    text-align: center;
    margin-top: 5px;
`
const IconBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
    font-weight: 600;
`
export default MyProfile;