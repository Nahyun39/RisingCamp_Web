// import {instance, setUser} from 'react-reudx'

// const loginBykakao = (code) => {
//     return function (dispatch, getState, { history }) {
//       instance
//         .get(`/user/kakao/callback?code=${code}`)
//         .then((res) => {
//           const token = res.headers.authorization.split("BEARER ");
//           localStorage.setItem("token", token[1]);
//           history.push("/"); // 토큰 받았고 로그인됐으니 화면 전환시켜줌(메인으로)
//           // 바로 유저정보 저장하기
  
//           instance
//             .get("/api/islogin")
//             .then((res) => {
//               console.log(res, "나는 로그인체크 응답");
//               dispatch(
//                 setUser({
//                   //유저정보를 다시 세팅
//                   nickname: res.data.nickname,
//                   username: res.data.username,
//                    profile:res.data.profile,
//                 })
//               );
//             })
//             .catch((error) => console.log("유저정보저장오류", error));
//         })
//         .catch((err) => {
//           console.log("소셜로그인 에러", err);
//           window.alert("로그인에 실패하였습니다.");
//           history.replace("/"); // 로그인 실패하면 처음화면으로 돌려보냄
//         });
//     };
//   };