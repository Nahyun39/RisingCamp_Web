import Main from './pages/Main'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Kakao from './pages/Kakao'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/kakao" element={<Kakao/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
