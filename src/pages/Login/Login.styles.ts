import styled from "styled-components";
import { convertPixelsToRem } from "../../utils";

const status_colors = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface IStatusProps {
  statusColor: keyof typeof status_colors;
}

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${({ theme }) => theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: ${convertPixelsToRem(8)};
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: ${convertPixelsToRem(8)};
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${({ theme }) => theme["gray-700"]};
      border-top: 4px solid ${({ theme }) => theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-left: 1.5rem;
      }
    }
  }
`;

export const Status = styled.span<IStatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme["gray-700"]};

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme, statusColor }) =>
      theme[status_colors[statusColor]]};
  }
`;
