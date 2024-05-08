import KakaoLoginImg from "@assets/images/kakao_login@3x.png";
import LogoImg from "@assets/images/Logo@3x.png";
import Seperator from "@components/Seperator";
import styled from "@emotion/styled";
import useLogin from "@hooks/login/useLogin";
import { useState } from "react";

const SocialKakao = () => {
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_LOGIN}&redirect_uri=${import.meta.env.VITE_KAKAO_LOGIN_REDIRECT}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };


  const {checkLogin}=useLogin();
  const [id,setId] = useState("");
  const [pwd,setPwd] = useState("");

  const handleId = (id:string)=>{
    setId(id)
  }
  const handlePwd = (pwd:string) =>{
    setPwd(pwd);
  }

  const handleCustomLogin = ()=>{
    let res =checkLogin(id,pwd);
  
  }


  return (
    <Container>

      <img src={LogoImg} alt="logo" width={80} />
      <Seperator height={40} />
      
        <input type="text" onChange={(e)=>{handleId(e.target.value)}} value={id} name="id" />
        <input type="password" onChange={(e)=>{handlePwd(e.target.value)}} value={pwd} name="pwd" />
        <button onClick={handleCustomLogin}>로그인</button>
      
      <Seperator height={40} />
      <button onClick={handleLogin}>
        <img src={KakaoLoginImg} alt="kakao-login" width={342} />
      </button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SocialKakao;
