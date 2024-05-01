import styled, { css } from "styled-components";
import { IColorProps } from "./Button.types";
import { convertPixelsToRem } from "../../utils/convertPixelsToRem";

interface IButtonContainerProps {
  variant: IColorProps;
}

const variants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<IButtonContainerProps>`
  width: ${convertPixelsToRem(100)};
  height: ${convertPixelsToRem(40)};

  background-color: ${({ theme }) => theme["green-500"]};

  /* ${({ variant }) => {
    return css`
      background-color: ${variants[variant]};
    `;
  }} */
`;
