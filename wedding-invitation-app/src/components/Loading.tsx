import styled from "styled-components";
import { useGameLoadingStore } from "../stores/useGameLoadingStore";

const Loading = () => {
  const isLoading = useGameLoadingStore((s) => s.loading);
  if (!isLoading) return null;

  return <Wrapper>Loading...</Wrapper>;
};

const Wrapper = styled.div`
  inset: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background: white;
`;
export default Loading;
