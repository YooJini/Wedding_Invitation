// 모바일 초대장 페이지
// 일반적인 모바일 청첩장 형식으로 구성

import styled from "styled-components";

const Invitation = () => {
  const handleClickBack = () => {
    window.history.back();
  };

  return (
    <InvitationStyles>
      <div className="content">
        <button className="back-button" onClick={handleClickBack}>
          X
        </button>
        <h1>초대장</h1>
        <h2>진이 👰🩷🤵 현상</h2>
        <p>진이와 현상이의 결혼식에 초대합니다.</p>
        <div className="details">
          <p>언제: 2025년 11월 8일 토요일 오후 5시</p>
          <p>어디서: 수원 라온몽드 하우스 웨딩</p>
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

  .back-button {
    position: absolute;
    top: 16px;
    right: 20px;
    padding: 3px 6px;
    font-size: 14px;
    background-color: transparent;
    color: #000000;
    border: 3px solid #000000cc;
    border-radius: 5px;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
