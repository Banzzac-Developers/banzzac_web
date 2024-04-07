import SquareButton from "@components/Button/SquareButton";
import InputDefault from "@components/input";
import styled from "@emotion/styled";
import { useState } from "react";

export default function UserInput(){
   // const [email,setEmail] = useState("");
    const [userInfo,setUserInfo]=useState({
        email:'',
        id:'',
        nickName:'',
        age:''
    })
    const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserInfo(prev=>({...prev,email:e.target.value}))
    }
    // ...prev == {email:'',id:''}
    const handleChangeId=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserInfo(prev=>({...prev,id:e.target.value}))
    }
    const handleChangenickName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserInfo(prev=>({...prev,nickName:e.target.value}))
    }
    const handleChangenickAge=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserInfo(prev=>({...prev,age:e.target.value}))
    }
    
    return (
        <Contianer>
            회원가입
            <InputDefault 
                title={"이메일"}
                id={"email"}
                placeholder="8~30자리 영문"
                width="100%"
                value={userInfo.email}
                onChange={handleChangeEmail}
            />
            <InputDefault 
                title={"아이디"}
                id={"id"}
                placeholder="8~30자리 영문"
                width="100%"
                value={userInfo.id}
                onChange={handleChangeId}
            />
             <InputDefault 
                title={"닉네임"}
                id={"nickName"}
                placeholder="8~30자리 영문"
                width="100%"
                value={userInfo.nickName}
                onChange={handleChangenickName}
            />

            
             <InputDefault 
                title={"나이"}
                id={"age"}
                placeholder="출생년도"
                width="100%"
                value={userInfo.age}
                onChange={handleChangenickAge}
            />

            <SquareButton 
                title={"다음"}
                fill={true}
                backgroundColor={"#ccc"}
            />


        </Contianer>
    )
}

const Contianer = styled.div`
    display: flex;
    flex-direction: column;

`;