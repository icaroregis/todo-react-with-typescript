import styled from "styled-components";
import { darken } from "polished";
import { convertPixelsToRem } from "../../../../utils";

export const EditContainer = styled.div`
  padding-top: ${convertPixelsToRem(25)};
  height: 150px;
`;

export const EditInput = styled.input`
  width: ${convertPixelsToRem(638)};
  height: ${convertPixelsToRem(54)};
  border-radius: ${convertPixelsToRem(8)};
  background-color: ${({ theme }) => theme["gray-500"]};
  border: 2px solid ${({ theme }) => theme["gray-700"]};
  padding: 0 ${convertPixelsToRem(15)};
  color: ${({ theme }) => theme["gray-300"]};

  &:focus {
    outline: 0;
    border: 2px solid ${({ theme }) => theme["blue-dark"]};
  }
`;

export const EditButton = styled.button`
  margin-top: ${convertPixelsToRem(20)};
  cursor: pointer;
  width: ${convertPixelsToRem(120)};
  height: ${convertPixelsToRem(48)};
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
