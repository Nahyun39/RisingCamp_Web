import { useEffect } from 'react';
import axios from 'axios'
import qs from 'qs'
import { useNavigate, useLocation } from 'react-router-dom';
// import { KaKaoLogin } from 'react-kakao-login';


// const Auth = () => {
//     const location = useLocation();
//     const REST_API_KEY = '36416607a0fc4e1221b8d24e94ee0c6d';
//     const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
//     const CLIENT_SECRET = "W8vLSPkGqcm51FcGHKkXic8L5Xr0FI3c";
//     const KAKAO_CODE = location.search.split('=')[1];

//     const navigate = useNavigate();

//     //calllback으로 받은 인가코드
//     const code = new URL(window.location.href).searchParams.get('code');

//     //check
//     console.log(code);

    // const getToken = () => {
    //     fetch(`https://kauth.kakao.com/oauth/token`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //         body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.access_token){
    //             localStorage.setItem('token', data.access_token);
    //         }else{
    //             navigate('/profile');
    //             console.log(data);
    //         }
    //     });
    // };

    // useEffect(() => {
    //     if(!location.search) return;
    //     getToken();
    // },[]);

    // return <div>KaKaoLogin</div>

//     const getToken = async () => {
//         const payload = qs.stringify({
//             grant_type: 'authorization_code',
//             client_id: REST_API_KEY,
//             redirect_url: REDIRECT_URI,
//             code: code,
//             client_secret: CLIENT_SECRET,
//         });

//         try{
//              // access token 가져오기
//             const res = await axios.post(
//                 'https://kauth.kakao.com/oauth/token',
//                 payload
//             );
//             console.log(res);
//             window.Kakao.init(REST_API_KEY)
//             //access token 설정
//             window.Kakao.Auth.setAccessToken(res.data.token);
//             navigate('/profile');
//         } catch(err){
//             console.log(err);
//         }
//     }

//     useEffect(() => {
//         getToken()
//     }, [])

//     return null
// };

// export default Auth;