import React from 'react'
import {useState, useEffect} from 'react';
import '../css/CartList.css'

const CartList = () => {
    const price1 = 14800;
    const price2 = 9900;
    const price3 = 14500;

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [total, setTotal] = useState(0);

    const incrementCount1 = () => {
        setCount1(count1+1);
    }
    const incrementCount2 = () => {
        setCount2(count2+1);
    }
    const incrementCount3 = () => {
        setCount3(count3+1);
    }

    const decrementCount1 = () => {
        if(count1 > 0){
            setCount1(count1-1);
        }
    } 

    const decrementCount2 = () => {
        if(count2 > 0){
            setCount2(count2-1);
        }
    } 

    const decrementCount3 = () => {
        if(count3 > 0){
            setCount3(count3-1);
        }
    } 

    useEffect(() => {
        const totalPrice = price1 * count1 + price2 * count2 + price3 * count3;
        setTotal(totalPrice.toLocaleString());
    },[count1, count2, count3])

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
                    <div className='productList-title'>
                        <span><img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNS4wNDQgNGEuNzUuNzUgMCAwIDEgLjc0NC42NDhsLjAwNi4xMDJ2Mi42ODlsMS43Mi0xLjcyYS43NS43NSAwIDAgMSAuOTc3LS4wNzJsLjA4NC4wNzNhLjc1Ljc1IDAgMCAxIC4wNzIuOTc2bC0uMDcyLjA4NC0yLjc4IDIuNzgtLjAwMSA0LjM5IDMuODAyLTIuMTk0IDEuMDE4LTMuNzk4YS43NS43NSAwIDAgMSAxLjQ3LjI3OWwtLjAyLjEwOS0uNjMgMi4zNSAyLjMyOS0xLjM0NmEuNzUuNzUgMCAwIDEgLjgzNCAxLjI0M2wtLjA4NC4wNTctMi4zMjggMS4zNDQgMi4zNDguNjNhLjc1Ljc1IDAgMCAxIC41NS44MDlsLS4wMi4xMWEuNzUuNzUgMCAwIDEtLjgxLjU1bC0uMTA4LS4wMi0zLjc5OC0xLjAxOC0zLjgwMyAyLjE5NCAzLjgwMiAyLjE5NiAzLjc5OS0xLjAxOGEuNzUuNzUgMCAwIDEgLjQ5MyAxLjQxM2wtLjEwNS4wMzYtMi4zNS42MyAyLjMzIDEuMzQ0YS43NS43NSAwIDAgMS0uNjU5IDEuMzQ0bC0uMDkxLS4wNDQtMi4zMjgtMS4zNDQuNjI4IDIuMzQ4YS43NS43NSAwIDAgMS0uNDI1Ljg4MmwtLjEwNS4wMzdhLjc1Ljc1IDAgMCAxLS44ODItLjQyNmwtLjAzNy0uMTA1LTEuMDE3LTMuNzk3LTMuODAzLTIuMTk3djQuMzkxbDIuNzggMi43OGEuNzUuNzUgMCAwIDEtLjk3NiAxLjEzNGwtLjA4NC0uMDczLTEuNzItMS43MnYyLjY5YS43NS43NSAwIDAgMS0xLjQ5My4xMDJsLS4wMDctLjEwMnYtMi42ODhsLTEuNzIgMS43MThhLjc1Ljc1IDAgMCAxLS45NzYuMDczbC0uMDg0LS4wNzNhLjc1Ljc1IDAgMCAxLS4wNzMtLjk3NmwuMDczLS4wODQgMi43OC0yLjc4di00LjM5MWwtMy44MDEgMi4xOTUtMS4wMTggMy43OThhLjc1Ljc1IDAgMCAxLTEuNDctLjI3OWwuMDItLjEwOS42My0yLjM1LTIuMzI5IDEuMzQ2YS43NS43NSAwIDAgMS0uODM1LTEuMjQzbC4wODUtLjA1NyAyLjMyOC0xLjM0NC0yLjM0OC0uNjNhLjc1Ljc1IDAgMCAxLS41NTEtLjgwOWwuMDItLjExYS43NS43NSAwIDAgMSAuODEtLjU1bC4xMS4wMiAzLjc5NyAxLjAxOCAzLjgwMi0yLjE5NS0zLjgwMS0yLjE5NS0zLjc5OSAxLjAxOGEuNzUuNzUgMCAwIDEtLjQ5My0xLjQxM2wuMTA1LS4wMzYgMi4zNS0uNjMtMi4zMy0xLjM0NGEuNzUuNzUgMCAwIDEgLjY1OS0xLjM0NGwuMDkxLjA0NCAyLjMyOCAxLjM0NC0uNjI4LTIuMzQ4YS43NS43NSAwIDAgMSAuNDI1LS44ODJsLjEwNS0uMDM3YS43NS43NSAwIDAgMSAuODgyLjQyNmwuMDM3LjEwNSAxLjAxNyAzLjc5NyAzLjgwMiAyLjE5NnYtNC4zOWwtMi43OC0yLjc4YS43NS43NSAwIDAgMSAuOTc3LTEuMTM0bC4wODQuMDczIDEuNzIgMS43MTlWNC43NWEuNzUuNzUgMCAwIDEgLjc1LS43NXoiIGZpbGw9IiM2RkFGRjMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K'></img>냉동 상품</span>
                        <button><img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo=' className='toggle-btn'></img></button>
                    </div>
                    
                    <div className='cartProduct'>
                        <label>
                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K'></img>
                        </label>
                        <img src='https://product-image.kurly.com/product/image/ef3f65b8-a290-453b-ae04-14affdf8f29c.jpg' className='cartProduct-img'></img>
                        <div className='cartProduct-name'>
                            <span className='cartProduct-name2'>[최현석의 쵸이닷] 가리비 바질 페스토 파스타</span>
                        </div>
                        <div class="count">
                            <button id="decrement" onClick={decrementCount1}></button>
                            <span id="num">{count1}</span>
                            <button id="increment" onClick={incrementCount1}></button>
                        </div>
                        <span className='price'>14,800원</span>
                        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=='></img>
                    </div>
                    <div className='cartProduct'>
                        <label>
                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K'></img>
                        </label>
                        <img src='https://product-image.kurly.com/product/image/ef3f65b8-a290-453b-ae04-14affdf8f29c.jpg' className='cartProduct-img'></img>
                        <div className='cartProduct-name'>
                            <span className='cartProduct-name2'>[이연복의 목란] 짜장면 2인분</span>
                        </div>
                        <div class="count">
                            <button id="decrement" onClick={decrementCount2}></button>
                            <span id="num">{count2}</span>
                            <button id="increment" onClick={incrementCount2}></button>
                        </div>
                        <span className='price'>9,900원</span>
                        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=='></img>
                    </div>
                    <div className='cartProduct'>
                        <label>
                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K'></img>
                        </label>
                        <img src='https://product-image.kurly.com/product/image/ef3f65b8-a290-453b-ae04-14affdf8f29c.jpg' className='cartProduct-img'></img>
                        <div className='cartProduct-name'>
                            <span className='cartProduct-name2'>[리틀넥] 비프 머쉬룸 리조또</span>
                        </div>
                        <div class="count">
                            <button id="decrement" onClick={decrementCount3}></button>
                            <span id="num">{count3}</span>
                            <button id="increment" onClick={incrementCount3}></button>
                        </div>
                        <span className='price'>14,500원</span>
                        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=='></img>
                    </div>
                 
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
                    <span>{total}원</span>
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
                            <strong>{total}</strong>
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