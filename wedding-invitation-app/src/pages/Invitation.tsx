// 모바일 초대장 페이지
// 일반적인 모바일 청첩장 형식으로 구성

import styled from "styled-components";

const Invitation = () => {
  return (
    <InvitationStyles>
      <div className="content">
        <h1>초대장</h1>
        <p>저희 결혼식에 초대합니다ㅋㅋㅋ.</p>
        <div className="details">
          <p>2025년 11월 8일 오후 5시</p>
          <p>수원 라온몽드 하우스 웨딩ㅌㅌㅌ</p>
          <div className="gallery">사진 공간</div>
        </div>
      </div>
    </InvitationStyles>
  );
};

export default Invitation;

const InvitationStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fefff3;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
