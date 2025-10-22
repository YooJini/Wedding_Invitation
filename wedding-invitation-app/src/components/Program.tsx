import styled from "styled-components";
import Overlay from "./Overlay";

const Program = ({ onClose }: { onClose: () => void }) => {
  return (
    <Overlay>
      <ProgramStyles>
        <Content>
          <h1>식순</h1>
          <p>1. 개식사 </p>
          <p>2. 양가 부모님 입장 및 화촉 점화</p>
          <p>3. 신랑, 신부 입장</p>
          <p>4. 부케 화동</p>
          <p>5. 성혼선언문 낭독</p>
          <p>6. 신부 아버지 덕담</p>
          <p>7. 양가 부모님께 인사</p>
          <p>8. 특별 이벤트</p>
          <p>9. 하객분들께 인사</p>
          <p>10. 행진</p>
          <button onClick={onClose}>X</button>
        </Content>
      </ProgramStyles>
    </Overlay>
  );
};

export default Program;

const ProgramStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80vw;
  border-radius: 8px;
  max-height: fit-content;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 2px solid #333;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    position: absolute;
    top: 1em;
    right: 1em;
    padding: 0.1em 0.3em;
    font-size: 1rem;
    background-color: transparent;
    border: 2px solid #333;
    border-radius: 5px;
  }

  p {
    font-size: 1rem;
    margin-top: -0.1em;
  }
`;
