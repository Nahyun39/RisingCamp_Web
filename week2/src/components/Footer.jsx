import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='left'>
                        <h2>고객행복센터</h2>
                        <strong className='phoneandtime'>
                            1644-1107
                            <span className='qa-centerday'>월~토요일 오전 7시 - 오후 6시</span>
                        </strong>
                        <div className="qa">
                            <button>카카오톡 문의</button>
                            월~토요일 | 오전 7시 - 오후 6시<br/>
                            일/공휴일 | 오전 7시 - 오후 1시
                        </div>
                        <div className="qa">
                            <button>1:1 문의</button>
                            365일<br/>
                            고객센터 운영시간에 순차적으로 답변드리겠습니다.
                        </div>
                        <div className="qa">
                            <button>대량주문 문의</button>
                            월~금요일 | 오전 9시 - 오후 6시<br/>
                            일/공휴일 | 낮 12시 - 오후 1시
                        </div>
                        <div className="email">
                            비회원 문의 : help@kurlycorp.com<br/>
                            비회원 대량주문 문의 : kurlygift@kurlycorp.com
                        </div>
                    </div>
                    <div className='right'>
                        <div className='ul-list'>
                            <li>컬리소개</li>
                            <li>컬리소개영상</li>
                            <li>인재채용</li>
                            <li>이용약관</li>
                            <li>개인정보처리방침</li>
                            <li>이용안내</li>
                        </div>
                        <div className='location'>
                            법인명 (상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567 <span className='purple'>사업자정보 확인</span><br/>
                            통신판매업 : 제 2018-서울강남-01646호 | 개인정보보호책임자 : 이원준<br/>
                            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 : 김슬아<br/>
                            입점문의 : <span className='purple'>입점문의하기</span> | 제휴문위 : <span className='purple'>business@kurlycorp.com</span><br/>
                            채용문의 : <span className='purple'>recruit@kurlycorp.com</span><br/>
                            팩스:070 - 7500 - 6098
                        </div>
                        <div className='sns'>
                            <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"></img> 
                            <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png"></img> 
                            <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png"></img> 
                            <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"></img> 
                            <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"></img>                            
                        </div>
                    </div>
                </div>
                <div className='footer-middle'>
                    <button>
                        <img src="https://res.kurly.com/pc/ico/2208/logo_isms.svg"></img>
                        <p>[인증범위] 컬리 쇼핑몰 서비스 개발·운영<br/>
                            (심사받지 않은 물리적 인프라 제외)<br/>
                            [유효기간] 2022.1.19 ~ 2025.01.18
                        </p>
                    </button>
                    <button>
                        <img src="https://res.kurly.com/pc/ico/2208/logo_privacy.svg"></img>
                        <p>개인정보보호 우수 웹사이트<br/>
                            개인정보처리시스템 인증 (ePRIVACY PLUS)
                        </p>
                    </button>
                    <button>
                    <img src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg"></img>
                        <p>토스페이먼츠 구매안전(에스크로)<br/>
                            서비스를 이용하실 수 있습니다.
                        </p>   
                    </button>
                    <button>
                        <img src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg"></img>
                        <p>고객님이 현금으로 결제한 금액에 대한 우리은행과<br/>
                            채무지급보증 계약을 체결하여 안전거래를 보장하고<br/>
                            있습니다.
                        </p>
                    </button>
                </div>
            </div>
            <div className="footer-bottom">
                <div className='footer-bottom-text'>
                    컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
                    마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.<br/>
                    @KURLY CORP ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer