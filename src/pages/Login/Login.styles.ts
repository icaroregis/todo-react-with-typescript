import { darken } from "polished";
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
  gap: ${convertPixelsToRem(100)};

  @media (max-width: 1442px) {
    > div:last-child {
      padding-right: 20px;
    }
  }

  @media (max-width: 1210px) {
    > div:last-child {
      padding-right: 0px;
    }
    gap: 0px;
  }
`;

export const ContainerLogo = styled.div`
  display: none;
  @media (max-width: 1023px) {
    display: block;
  }
`;

export const Block = styled.div`
  border: 1px solid yellow;
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
  margin-bottom: 50px;

  input {
    width: 100%;
    height: ${convertPixelsToRem(54)};
    border-radius: ${convertPixelsToRem(8)};
    border: 1px solid ${({ theme }) => theme["gray-700"]};
    padding: 0 ${convertPixelsToRem(15)};
    color: ${({ theme }) => theme["gray-300"]};

    &:focus {
      outline: 0;
      border: 2px solid ${({ theme }) => theme["blue-dark"]};
    }
  }

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
      top: ${convertPixelsToRem(18)};
      right: ${convertPixelsToRem(18.2)};
      background-color: transparent;
      border: none;
      cursor: pointer;

      &:focus {
        outline: none;
        border: none;
      }
    }
  }
`;

export const ForgotYourPassword = styled.section`
  margin-top: ${convertPixelsToRem(100)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    a {
      font-size: ${convertPixelsToRem(16)};
      font-weight: 400;
      line-height: 21px;
      text-decoration: none;
      color: ${({ theme }) => theme["blue-dark"]};
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
  width: 100% !important;
  cursor: pointer;
  width: ${convertPixelsToRem(90)};
  height: ${convertPixelsToRem(54)};
  border-radius: ${convertPixelsToRem(8)};
  background-color: ${({ theme }) => theme["blue-dark"]};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${convertPixelsToRem(4)};
  color: ${({ theme }) => theme.white};
  transition: background-color 0.2s ease;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => darken(0.1, theme["blue-dark"])};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: ${convertPixelsToRem(60)};
  h1 {
    font-family: "Poppins", sans-serif;
  }
`;

export const IconContainer = styled.div`
  margin-bottom: 30px;
`;
