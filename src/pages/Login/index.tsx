const SocialKakao = () => {
  const Rest_api_key = "d1c29661caeadbbfdf7dfb03de5a298a"; //REST API KEY
  const redirect_uri = "http://localhost/api/login/oauth2/code/kakao"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    console.log("들옴?" + kakaoURL);
    window.location.href = kakaoURL;
  };
  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};
export default SocialKakao;
