import React from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";
import { history } from "../redux/configStore";
// import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from "../components/OAuth";

const KakaoLogin =() => {
  const REST_API_KEY = "36416607a0fc4e1221b8d24e94ee0c6d"
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback"
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return(
      <h1>
          <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      </h1>

  )

}

export default KakaoLogin