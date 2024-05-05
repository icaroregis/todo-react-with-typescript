import styled from "styled-components";
import { convertPixelsToRem } from "../../utils";

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${convertPixelsToRem(700)};
    height: ${convertPixelsToRem(700)};
  }

  @media (max-width: 1442px) {
    img {
      width: ${convertPixelsToRem(500)};
      height: ${convertPixelsToRem(500)};
    }
  }

  @media (max-width: 1210px) {
    img {
      display: none;
    }
  }
`;
