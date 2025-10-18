import styled from "styled-components";
import { useGameLoadingStore } from "../stores/useGameLoadingStore";

const Loading = () => {
  const isLoading = useGameLoadingStore((state) => state.loading);
  if (!isLoading) return null;

  return <Wrapper>Loading</Wrapper>;
};

const Wrapper = styled.div`
  inset: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background: rgba(255, 255, 255);
`;
export default Loading;
