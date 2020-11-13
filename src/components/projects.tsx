import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

interface Company {
  name : string, 
  period : number,
  desc : string,
  contents : string,
}
const Projects = () => {
  const contents = dummy.map(ele => {
    const { name, period, desc } = ele;
    return (
      <Link to={`/project/${name}`}>
      <div className="project-grid-item">
        <div className="project-name">{name}</div>
        <div className="project-period">{period}일</div>
        <div className="project-desc">{desc}</div>
      </div>
      </Link>
  )});
  return (
    <div className="project-contents-container">{contents}</div>
  )
}

const dummy:Company[] = [
  {name:"네이버", period:14, desc:"음악검색엔진 개발", contents:"음악검색 엔진 개발에 참여하실 신입 개발자를 모집합니다. 무료로 봉사해주시면 됩니다. 감사합니다."},
  {name:"카카오", period:14, desc:"대리운전검색 개발", contents:"대리운전 검색 엔진 개발에 참여하실 신입 개발자를 모집합니다. 무료로 봉사해주시면 됩니다. 감사합니다."},
  {name:"까리용", period:14, desc:"시간기반법령검색", contents:"시간기반법령검색서비스 엔진 개발에 참여하실 신입 개발자를 모집합니다. 무료로 봉사해주시면 됩니다. 감사합니다."},
  {name:"코드스테이츠", period:14, desc:"수강생 홍보모델 개발", contents:"수강생을 더 잘꼬시게 만들어주실 신입 개발자를 모집합니다. 무료로 봉사해주시면 됩니다. 감사합니다."},
];

export default Projects;