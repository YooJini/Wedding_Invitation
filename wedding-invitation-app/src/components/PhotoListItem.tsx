import React from "react";
import styled from "styled-components";

const PhotoListItem = () => {
  return (
    <PhotoListItemStyle>
      <img src="/photos/photo_1.jpg"></img>
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
