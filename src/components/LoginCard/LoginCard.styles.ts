import styled from "styled-components";

interface IGlobalCard {
  height?: string;
  width?: string;
}

export const Container = styled.div<IGlobalCard>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  padding: 2.5rem;
  width: ${({ width }) => (width ? width : "550px")};
  height: ${({ height }) => (height ? height : "100%")};
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-height: 900px) {
    width: 590px;
  }

  @media (max-height: 880px) {
    width: 570px;
  }

  @media (max-height: 850px) {
    width: 550px;
  }

  @media (max-height: 780px) {
    width: 520px;
  }

  @media (max-height: 750px) {
    width: 500px;
  }

  @media (max-height: 720px) {
    width: 485px;
  }

  @media (max-height: 700px) {
    width: 460px;
  }
`;
