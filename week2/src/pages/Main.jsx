import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Slides from '../components/Slides'

const Main = () => {
  return (
    <div>
      <Header/>
      <Slides />
      <ProductList
        image="https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1653036915985l0.jpg"
        name="[LOMA] 샴푸&컨디셔너 1L 선물세트 3종"
        salesPercent="28"
        price="80230"
        orginalPrice="113000"
        review="후기 716"
      />
      <Footer />
    </div>
  )
}

export default Main;