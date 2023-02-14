import React from 'react'
import '../css/ProductDetail.css'
import {useState, useEffect} from 'react';

const ProductDetail = () => {
    const price = 123300;

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    }

    const decrementCount = () => {
        if(count > 0){
            setCount(count-1);
        }
    } 

    useEffect(() => {
        const totalPrice = price * count;
        setTotal(totalPrice.toLocaleString());
    },[count])

    return (
    <div>
    <div className="detail">
        <div className="detail-container">
            <img src="https://product-image.kurly.com/product/image/eae57e3b-1c19-4d22-9962-acfc09c7b640.jpg"></img>
            <div className="detail-right">
                <span>샛별배송</span>
                <div className="detail-title">
                    <h1>[산타마리아노벨라] 프리지아 오드코롱 2종 (택1)</h1>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="></img>
                </div>
                <p className="clean">깨끗하고 청초한 프리지아의 향기</p>
                <div className="color">
                    <span className="percent">10%</span>
                    <span className="money">123,300</span>
                    <span className="won">원~</span>
                </div>
                <p className="original-won">137,000원<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTAuNSIgY3k9IjEwLjUiIHI9IjYuOSIvPgogICAgICAgIDxwYXRoIGQ9Ik03LjggOC43MzJoMS4zOTdjLjA0OC0uNzI2LjU0MS0xLjE5IDEuMzA4LTEuMTkuNzUgMCAxLjI1LjQ0NyAxLjI1IDEuMDY1IDAgLjU0LS4yMS44NS0uODE0IDEuMjRsLS4xNzQuMTFjLS44Mi40ODEtMS4xNjUgMS4wMTctMS4xMTIgMS45MDhsLjAwNi40MDVoMS4zOHYtLjM0YzAtLjU4OC4yMi0uODkxLjk5OC0xLjM0OS44MS0uNDgyIDEuMjYxLTEuMTE4IDEuMjYxLTIuMDI3IDAtMS4zMTUtMS4wODgtMi4yNTQtMi43MTctMi4yNTQtMS43NjYgMC0yLjczNSAxLjAyMy0yLjc4MyAyLjQzMnptMi42MTYgNi4zNzRjLS41OTQgMC0uOTg3LS4zNzUtLjk4Ny0uOTQ1IDAtLjU3Ny4zOTMtLjk1Mi45ODctLjk1Mi42MDcgMCAuOTg3LjM3NS45ODcuOTUyIDAgLjU3LS4zOC45NDUtLjk4Ny45NDV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvZz4KPC9zdmc+Cg=="></img></p>
                <p className="title-purple">로그인 후, 적립 혜택이 제공됩니다.</p>
                <button className="coupon-btn"><span>산타마리아노벨라 쿠폰 보러가기</span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNUYwMDgwIiBzdHJva2Utd2lkdGg9IjEuMyIgZD0iTTkgMi4wODhMOSAxMS4wOTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzYuMDAwMDAwLCAtODM5LjAwMDAwMCkgdHJhbnNsYXRlKDAuMDAwMDAwLCAxMzIuMDAwMDAwKSB0cmFuc2xhdGUoMjAuMDAwMDAwLCA1MDIuMDAwMDAwKSB0cmFuc2xhdGUoMC4wMDAwMDAsIDE5MS4wMDAwMDApIHRyYW5zbGF0ZSgyMTYuMDAwMDAwLCAxNC4wMDAwMDApIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zIiBkPSJNMi4wOCAxMS4wOTlMMi4wOCAxNS4wNzQgMTUuOTE0IDE1LjA3NCAxNS45MTQgMTEuMDk5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM2LjAwMDAwMCwgLTgzOS4wMDAwMDApIHRyYW5zbGF0ZSgwLjAwMDAwMCwgMTMyLjAwMDAwMCkgdHJhbnNsYXRlKDIwLjAwMDAwMCwgNTAyLjAwMDAwMCkgdHJhbnNsYXRlKDAuMDAwMDAwLCAxOTEuMDAwMDAwKSB0cmFuc2xhdGUoMjE2LjAwMDAwMCwgMTQuMDAwMDAwKSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNUYwMDgwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMyIgZD0iTTUuNjMgOC4xMkw5LjAwNSAxMS40OTYgMTIuMzgxIDguMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzYuMDAwMDAwLCAtODM5LjAwMDAwMCkgdHJhbnNsYXRlKDAuMDAwMDAwLCAxMzIuMDAwMDAwKSB0cmFuc2xhdGUoMjAuMDAwMDAwLCA1MDIuMDAwMDAwKSB0cmFuc2xhdGUoMC4wMDAwMDAsIDE5MS4wMDAwMDApIHRyYW5zbGF0ZSgyMTYuMDAwMDAwLCAxNC4wMDAwMDApIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="></img></button>
                <div className="definition">
                    <dl className="first">
                        <dt className="first-title">배송</dt>
                        <dd className="first-detail1">
                            <pre>샛별배송</pre>
                            <pre className="sub-detail">23시 전 주문 시 내일 아침 7시 전 도착</pre>
                            <pre className="sub-detail">(대구·부산·울산 샛별배송 운영시간 별도 확인)</pre>
                        </dd>
                    </dl>
                    <dl class="first">
                        <dt class="first-title">판매자</dt>
                        <dd class="first-detail2">
                            <pre>컬리</pre>
                        </dd>
                    </dl>
                    <dl class="first">
                        <dt class="first-title">포장타입</dt>
                        <dd class="first-detail3">
                            <pre>상온 (종이포장)</pre>
                            <pre class="sub-detail">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</pre>
                        </dd>
                    </dl>
                    <dl class="first">
                        <dt class="first-title">안내사항</dt>
                        <dd class="first-detail3">
                            <pre>이드랄리아 리추얼 트라이얼 키트와 토탈 프래그런스 키트</pre>
                            <pre>증정품 소진 완료되어 이벤트 종료되었습니다. 구매 전 참고 부탁드립니다.</pre>
                        </dd>
                    </dl>
                    <dl className="first">
                        <dt className="first-title">상품 선택</dt>
                        <dd className="first-detail-box">
                            <div className="count">
                                <button id="decrement" onClick={decrementCount}></button>
                                <span id="num-count">{count}</span>
                                <button id="increment" onClick={incrementCount}></button>
                            </div>
                        </dd>
                    </dl>

                    <div class="detail-right-bottom">
                        <div class="cartwon">
                            <span class="letter1">총 상품금액: </span>
                            <span class="letter2">{total}</span>
                            <span class='won'>원</span>
                        </div>
                        <div class="cartwon-detail">
                            <button>적립</button>
                            <span>로그인 후, 적립 혜택 제공</span>
                        </div>
                        <div class="img-flex">
                            <button class="emo"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"></img></button>
                            <button class="emo"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="></img></button>
                            <button class="purple">장바구니 담기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="detail-menu">
            <ul>
                <li>상품설명</li>
                <li>상세정보</li>
                <li>후기(17)</li>
                <li>문의</li>
            </ul>
        </nav>
        <div class="context">
            <img src="https://img-cf.kurly.com/shop/data/goodsview/20230125/gv40000479681_1.jpg" className='detail-img1'></img>
            <img src-="https://img-cf.kurly.com/shop/data/goodsview/20230125/gv40000479682_1.jpg" className='detail-img2'></img>
            <img src="https://img-cf.kurly.com/shop/data/goodsview/20230125/gv20000479683_1.jpg" className='detail-img3'></img>
            <div>
                <h2 className='text-heritage'>800년의 헤리티지를 잇는 새로운 이야기,</h2>
                <h2 className='text-edition'>피렌체 1221 에디션</h2>
                <p class="letter-first">산타마리아노벨라의 800년 헤리티지를 현대적으로 재해석한 피렌체 1221 에디션을 소개합니다. 산타마리아노벨라의 아이코닉한 향이 담</p>
                <p class="letter">긴 오 드 코롱과 바디 컬렉션, 왁스 타블렛, 세 가지의 에디션을 새롭게 선보였어요. 오래전 수도사들이 사용했던 유리병을 오마쥬한 투명한</p>
                <p class="letter">향수 바틀, 산타마리아노벨라의 문양이 새겨진 골드 캡, 그리고 피렌체의 전통 양식을 계승한 라벨 디자인까지. 새로운 패키지로 태어난 산타</p>
                <p class="letter">마리아노벨라의 특별한 에디션을 만나보세요.</p>
            </div>
            <img src="https://img-cf.kurly.com/shop/data/goodsview/20230125/gv10000479684_1.jpg" className='kurlypick-img'></img>
            <div class="text">
                <h2 className='text-freejia'>01~02. 프리지아 오 드 코롱 2종</h2>
                <div className='soap-wrapper'>
                    <span className='text-guide'>・ 선택 가이드</span><span>: ①50mL, ②100mL 중 선택하세요.</span><br/>
                    <span className='text-guide'>・ 특징</span><span>: 깨끗한 비누처럼 포근하고 섬세한 프리지아 향이에요.</span>
                </div>
            </div>
            <img src="https://img-cf.kurly.com/shop/data/goodsview/20230126/gv10000479685_1.jpg" className='kurlytip-img'></img>
            <div class="text">
                <h2 className='text-check'>구입 전 확인하세요</h2>
                <div className='text-shoppingbag'>
                    <span>・ 제품을 넣을 수 있는 전용 쇼핑백을 함께 보내드립니다.</span>
                    
                </div>
            </div>
            <img src="https://img-cf.kurly.com/shop/data/goodsview/20230125/gv30000479687_1.jpg" className='aboutbrand-img'></img>
            <div class='text-santamariano'>
                <p class="letter1">산타마리아노벨라는 1221년 이탈리아 문화의 중심, 피렌체에서 시작된 라이프스타일 뷰티 브랜드입니다. 수도사들이 수도원의 정원에서</p>
                <p class="letter">기른 허브와 약초로 연고와 밤 등을 만들던 것에서 그 역사가 시작되었죠. 1332년 수도사들이 허브 추출물로 한 상인을 치료하며 그 효능이</p>
                <p class="letter">수도원 밖으로 처음 알려지게 되는데요. 이후 흑사병으로 고통받는 사람들을 위해 '아쿠아 디 로즈'를 제조하는 등 수 세기에 걸쳐 다양한 제</p>
                <p class="letter">품을 개발하죠. 1612년 산타마리아노벨라는 자신들의 약국을 대중들에게 공식적으로 개방했고, 주변 국가의 왕실과 저명한 예술가들에게</p>
                <p class="letter">사랑을 받으며 그 명성을 널리 알렸습니다. 현재까지도 피렌체의 정원에서 얻은 재료와 전통 그대로의 방식을 고수하며 제품을 생산하고 있</p>
                <p class="letter">어요. 800년간 이어져온 산타마리아노벨라의 오랜 역사와 이야기를 만나보세요.</p>
            </div>
            <img src="https://img-cf.kurly.com/shop/data/goodsview/20230125/gv00000479686_1.jpg" className='adver-img'></img>
            <img src="https://img-cf.kurly.com/shop/data/goodsview/20230125/gv20000479688_1.jpg"></img>
        </div>        
    </div>
    </div>
  )
}

export default ProductDetail