// import React from 'react';
// import '../css/Home.css';

// const Home = () => {
//   const REST_API_KEY = '36416607a0fc4e1221b8d24e94ee0c6d';
//   const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
//   const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

//   return (
//     <div>
//       <div className="btn_login">
//         <span>
//           <a href={KAKAO_AUTH_URL}>Kakao Login</a>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

const JAVASCRIPT_KEY = '3bfeacd13dafa83b3a87d6f70270857d'
const buttonBlock = {
  border: 'none',
  borderRadius: '9px',
  fontSize: '17px',
  width: '284px',
  fontWeight: '500',
  height: '32px',
  cursor: 'pointer',
  background: '#fae101',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '4px 0px',
};

const ButtoninnerText = styled.h3`
  margin: 0;
  font-size: 14px;
`;

const Home = () => {

    const responseKakao = (response) => {
        console.log(response);
    }
    // const responseKakao = (response) => {
    //     const {id} = response.profile;
    //     const {email} = response.profile.kakao_account;
    //     // oAuthLoginHandler(id, email);
    // };
   
        // window.Kakao.Auth.login({
        //     scope:'profile, account_email, gender',
        //     success: function(authObj){
        //         console.log(authObj);
        //         window.Kakao.API.request({
        //             url: '/v2/user/me',
        //             success: res => {
        //                 const kakao_account = res.kakao_account;
        //             }
        //         })
        //     }
        // })
  return (
    <>
      <KaKaoLogin
        token={JAVASCRIPT_KEY}
        buttonText="kakao"
        onSuccess={responseKakao}
        onFail={console.error}
        onLogout={console.info}
        style={buttonBlock}
      >
        <ButtoninnerText>카카오 계정으로 로그인</ButtoninnerText>
      </KaKaoLogin>
    </>
  );
};

export default Home;