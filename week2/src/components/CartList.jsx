import React from 'react'
import '../css/CartList.css'

const CartList = () => {
  return (
    <div>
    <div className="main-container">
        <h2>장바구니</h2>
        <div className="container">
            <div className="left-wrapper">
                <div className="left-top">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjIgLTEwOTApIHRyYW5zbGF0ZSgxMDAgOTM2KSB0cmFuc2xhdGUoMTA0NiAxNDIpIHRyYW5zbGF0ZSgxNiAxMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41IiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNFMkUyRTIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAxMi42NjdMMTAuMzg1IDE2IDE4IDguNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="></img>
                    <span className="s1">전체선택(0/0)</span>
                    <span className="line-column"></span>
                    <span className="s1">선택삭제</span>
                </div>
                <div className="left-middle">
                    <p>장바구니에 담긴 상품이 없습니다</p>
                </div>
                <div className="left-top">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjIgLTEwOTApIHRyYW5zbGF0ZSgxMDAgOTM2KSB0cmFuc2xhdGUoMTA0NiAxNDIpIHRyYW5zbGF0ZSgxNiAxMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41IiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNFMkUyRTIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAxMi42NjdMMTAuMzg1IDE2IDE4IDguNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="></img>
                    <span className="s1">전체선택(0/0)</span>
                    <span className="line-column"></span>
                    <span className="s1">선택삭제</span>
                </div>
            </div>
            <div className="right-wrapper">
                <div className="right-top">
                    <h3>배송지</h3>
                    <div>
                        <p>배송지를 등록하고</p>
                        <p>구매 가능한 상품을 확인하세요!</p>
                        <button className="addr"><span><img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"></img>주소 검색</span></button>
                    </div>
                </div>
                <div className="right-middle">
                   <div className="content">
                    <span>상품금액</span>
                    <span>0원</span>
                   </div>
                   <div className="content">
                    <span>상품할인금액</span>
                    <span>0원</span>
                   </div>
                   <div className="content">
                    <span>배송비</span>
                    <span>0원</span>
                   </div>
                </div>
                <div class="right-bottom">
                    <div class="content">
                        <span>결제예정금액</span>
                        <span>
                            <strong>0</strong>
                            <span>원</span>
                        </span>
                       </div>
                </div>
                <button className="cart-btn">상품을 담아주세요</button>
                <div className="cart-detail">
                    <p>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</p>
                    <p>[마이컬리 {'>'} 주문내역 상세페이지] 에서 직접 취소하</p>
                    <p>실 수 있습니다.</p>
                </div>
            </div>
        </div>
    </div>        
    </div>
  )
}

export default CartList