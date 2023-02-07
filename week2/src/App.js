import Main from './pages/Main'
import Product from './pages/Product'
import Cart from './pages/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList';

function App() {
  const ProductData = () => [
    {
      id: 1,
      name: "[LOMA] 샴푸&컨디셔너 1L 선물세트 3종",
      image: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1653036915985l0.jpg",
      salesPercent: 28,
      price: 80230,
      originalPrice: 113000,
      review: 716
    },
    {
      id: 2,
      name: "[아로마티카] 로즈마리 헤어 씨크닝 컨디셔너 510ml",
      image: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1653036915985l0.jpg",
      salesPercent: 40,
      price: 16200,
      originalPrice: 27000,
      review: "999+"
    },
    {
      id: 3,
      name: "[아로마티카] 로즈마리 스칼프 스케일링 샴푸 510ml",
      image: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1653036915985l0.jpg",
      salesPercent: 37,
      price: 17010,
      originalPrice: 27000,
      review: "999+"
    },
    {
      id: 4,
      name: "[닥터포헤어] 폴리젠 오리지널 샴푸 500ml 듀오기획",
      image: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1653036915985l0.jpg",
      salesPercent: 27,
      price: 33500,
      originalPrice: 46000,
      review: 109
    },
  ];
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
