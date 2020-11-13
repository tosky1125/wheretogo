import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>"4차 산업혁명"</h1>
      <h1>"개발인력양성"</h1>
      <div>그로 인한 신입 개발자 공급의 폭증</div>
      <div>막대한 국비가 투입되어</div>
      <div>개발자가 되었지만 </div>
      <div>경력만 원하는 기업</div>
      <div>경력을 원하는 신입</div>
      <div>타협점 = 프로젝트</div>
      <div className='benefit-container'>
        <div className='benefit-company'>
          <ul><h3>기업</h3>
          <li>신입 개발자 채용에 부담</li>
          <li>프로토타입 프로젝트 구현</li>
          <li>검증된 개발자 채용희망</li>
          <li>최소 주 1회 코드리뷰</li>
          </ul>
        </div>
        <div className='benefit-candidate'>
        <ul><h3>신입개발자</h3>
          <li>경력부족으로 인한 취업난해소</li>
          <li>기업협업을 통한 현업직접경험</li>
          <li>지속적인 코드리뷰를 통한 실력 향상</li>
          <li>풍부한 커리어 형성</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home;