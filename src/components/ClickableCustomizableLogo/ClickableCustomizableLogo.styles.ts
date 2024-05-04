import styled from "styled-components";
import { convertPixelsToRem } from "../../utils";

export const ImageContent = styled.div`
  img {
    width: ${convertPixelsToRem(700)};
    height: ${convertPixelsToRem(700)};
  }

  svg {
    fill: red;
  }
`;
