import styled from "styled-components";

type Props = {
  url: string;
};

const PhotoListItem = ({ url }: Props) => {
  return (
    <PhotoListItemStyle>
      <img src={url} decoding="async"></img>
    </PhotoListItemStyle>
  );
};

const PhotoListItemStyle = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
`;
export default PhotoListItem;
