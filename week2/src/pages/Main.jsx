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
      <ProductList/>
      <Footer />
    </div>
  )
}

export default Main;