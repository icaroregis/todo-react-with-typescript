import styled from "styled-components";
import { convertPixelsToRem } from "../../utils";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${convertPixelsToRem(10)};
  width: 100%;
  height: ${convertPixelsToRem(200)};
  background-color: ${({ theme }) => theme["gray-700"]};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const BaseTitle = styled.div`
  margin-top: -10px;
  font-size: ${convertPixelsToRem(40)};
  width: fit-content;
  font-weight: bold;
`;

export const FirstTitle = styled(BaseTitle)`
  color: ${({ theme }) => theme.blue};
`;

export const SecondTitle = styled(BaseTitle)`
  color: ${({ theme }) => theme["purple-dark"]};
`;
