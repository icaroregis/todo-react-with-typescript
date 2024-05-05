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
  background-color: ${({ theme }) => theme["gray-150"]};
  border-radius: 10px;
  padding: 2.5rem;
  width: ${({ width }) => (width ? width : "550px")};
  height: ${({ height }) => (height ? height : "100%")};
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 600px) {
    height: 100vh;
  }
`;
