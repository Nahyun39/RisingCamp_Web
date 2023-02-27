import './App.css';
import Auth from "./components/Auth";
import Home from './components/Home'
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import KakaoLogin from './components/kakaoLogin';

function App() {
  const REST_API_KEY = '36416607a0fc4e1221b8d24e94ee0c6d';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  console.log(REST_API_KEY);
  console.log(REDIRECT_URI);

  return (
    <Router>
      <Routes>
        <Route path ='/' element={ <Home/> } />
        {/* <Route path="/oauth/kakao/callback" element={<Auth />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
