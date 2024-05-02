import styled, { CSSProp } from "styled-components";
import { convertPixelsToRem } from "../../utils";

interface ICustomStyle {
  customStyle?: CSSProp;
}

interface IModalContainerProps {
  minWidth?: string;
  width?: string;
  maxWidth?: string;
  minHeight?: string;
  height?: string;
  maxHeight?: string;
  zIndex?: number;
  customStyle?: CSSProp;
}

export const ModalContainer = styled.section<IModalContainerProps>`
  position: relative;
  display: flex;
  padding-bottom: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme["gray-400"]};
  border-radius: 10px;
  min-width: ${({ minWidth }: IModalContainerProps): string | undefined =>
    minWidth};
  width: ${({ width }: IModalContainerProps): string => width ?? "50%"};
  max-width: ${({ maxWidth }: IModalContainerProps): string | undefined =>
    maxWidth};
  min-height: ${({ minHeight }: IModalContainerProps): string | undefined =>
    minHeight};
  height: ${({ height }: IModalContainerProps): string | undefined => height};
  max-height: ${({ maxHeight }: IModalContainerProps): string | undefined =>
    maxHeight};
  z-index: ${({ zIndex }: IModalContainerProps): number => zIndex ?? 1};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${({ customStyle }) => (customStyle ? customStyle : "")}
`;

export const ModalHeader = styled.div<ICustomStyle>`
  position: relative;
  width: 100%;
  top: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  ${({ customStyle }) => (customStyle ? customStyle : "")}
  background-color: ${({ theme }) => theme["gray-300"]};
`;

export const ModalHeaderContainer = styled.div<ICustomStyle>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.5rem;
  ${({ customStyle }) => (customStyle ? customStyle : "")}
`;

export const ModalHeaderTitle = styled.h1<ICustomStyle>`
  padding: ${convertPixelsToRem(5)} ${convertPixelsToRem(5)};
  width: 100%;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme["gray-500"]};
  margin-left: 0.5rem;
  ${({ customStyle }) => (customStyle ? customStyle : "")}
`;

export const ModalCloseButton = styled.button`
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 1.8rem;
  height: 1.8rem;
  background-color: ${({ theme }) => theme["gray-300"]};

  svg {
    position: relative;
    top: 63%;
    transform: translateY(-50%) !important;
    fill: ${({ theme }) => theme.white};
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div<ICustomStyle>`
  width: 100%;
  height: 100%;
  padding: 0 2.5rem 0 2.5rem;
  ${({ customStyle }) => (customStyle ? customStyle : "")}
`;

export const ModalFooter = styled.div<ICustomStyle>`
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  padding-right: 1rem;
  border-top: 1px solid #dcdcdc;
  ${({ customStyle }) => (customStyle ? customStyle : "")}
`;
