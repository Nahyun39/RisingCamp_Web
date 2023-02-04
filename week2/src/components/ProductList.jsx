import React from 'react'
import Card from './Card'
// import './ProductList.css'

const expenses = [
    {
        id: '1',
        title: '[LOMA] 샴푸&컨디셔너 1L 선물세트 3종',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {   id: '2', 
        title: '[아로마티카] 로즈마리 헤어 씨크닝 컨디셔너 510ml', 
        amount: 799.49, 
        date: new Date(2021, 2, 12) 
    },
    {
        id: '3',
        title: '[아로마티카] 로즈마리 스칼프 스케일링 샴푸 510ml',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: '4',
        title: '[닥터포헤어] 폴리젠 오리지널 샴푸 500ml 듀오기획',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const ProductList = () => {
    return (
        <div>ProductList</div>
    )
}

export default ProductList