import styled from "styled-components";

type Props = {
  url: string;
  isActive?: boolean;
  onClick?: () => void;
};

const PhotoListItem = ({ url, onClick }: Props) => {
  return (
    <PhotoListItemStyle onClick={onClick}>
      <img src={url}></img>
    </PhotoListItemStyle>
  );
};

const PhotoListItemStyle = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  flex: 0 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
export default PhotoListItem;
