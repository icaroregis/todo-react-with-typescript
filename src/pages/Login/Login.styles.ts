import { convertPixelsToRem } from "../../utils";
import styled from "styled-components";

interface IPropsLogin {
  inputBorder?: boolean;
  inputBorderColor?: string | null;
  height?: string;
  width?: string | undefined;
}

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: ${convertPixelsToRem(50)};
`;

export const ContainerLogo = styled.div`
  display: none;
  @media (max-width: 1023px) {
    display: block;
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentInput = styled.div<IPropsLogin>`
  margin-bottom: 2rem;
  width: ${({ width }) => (width ? width : "inherit")};
  height: ${({ height }) => (height ? height : "inherit")};
  border-radius: 14px;
  background: transparent !important;

  label {
    display: block;
    text-align: left;
    font-size: 0.75rem;
    margin-bottom: 5px;
    color: ${({ theme }) => theme["gray-400"]};
  }

  &::placeholder {
    color: ${({ theme }) => theme["gray-400"]};
  }

  @media (max-width: 1250px) {
    width: 21.875rem;
  }

  > div {
    position: relative;

    > button {
      position: absolute;
      top: ${convertPixelsToRem(15)};
      right: ${convertPixelsToRem(18.2)};
      background-color: transparent;
      border: none;

      &:focus {
        outline: none;
        border: none;
      }
    }
  }
`;

export const ForgotYourPassword = styled.section`
  margin-top: -6px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    a {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 21px;
    }
  }
`;

export const ContainerRegisterAnAccount = styled.div`
  display: flex;
  gap: 4px;
  position: absolute;
  bottom: 24px;

  p,
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) => theme["gray-400"]};
  }

  a {
    color: green;
  }
`;

export const Button = styled.button`
  margin-top: ${convertPixelsToRem(10)};
  width: 100% !important;
`;
