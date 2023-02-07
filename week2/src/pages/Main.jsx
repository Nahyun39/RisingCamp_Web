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
        title="프리미엄 헤어케어의 모든 것"
        subTitle="LOMA부터 아로마티카까지, 최대 55% 할인"
        image="https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1653036915985l0.jpg"
        name="[LOMA] 샴푸&컨디셔너 1L 선물세트 3종"
        salesPercent="28"
        price="80,230"
        orginalPrice="113000"
        review="후기 716"
      />
      <ProductList
        title="이주의 혜택 마지막 행사✨"
        subTitle="놓치면 후회할 아이템만 모아모아 "
        image="https://product-image.kurly.com/cdn-cgi/image/quality=85,width=400/product/image/eae57e3b-1c19-4d22-9962-acfc09c7b640.jpg"
        name="[산타마리아노벨라] 프리지아 오드코롱 2종(택1)"
        salesPercent="10"
        price="123,300"
        orginalPrice="137,000"
        review="후기 14"
      />
      <ProductList
        title="조회수 급상승, 실시간 순위"
        subTitle="1주일 간 높은 조회수를 기록한 트렌드 아이템"
        image="https://product-image.kurly.com/cdn-cgi/image/quality=85,width=400/product/image/9ee1a5e4-b8d8-42e0-9332-568d684ceb30.jpg"
        name="[피카소꼴레지오니] 데일리 메이크업 파우치"
        salesPercent="25"
        price="17,900"
        orginalPrice="24,000"
        review="후기 233"
      />
      <ProductList
        title="아는사람만 조용히 사는"
        subTitle="숨겨진 꿀템을 소개합니다~~!!"
        image="https://product-image.kurly.com/cdn-cgi/image/quality=85,width=400/product/image/cf709ad5-472b-41aa-b828-db47c4b6c879.jpg"
        name="[페이스팩토리] LED 라인케어 셀라이너"
        salesPercent="64"
        price="52,900"
        orginalPrice="149,000"
        review="후기 49"
      />
      <Footer />
    </div>
  )
}

export default Main;