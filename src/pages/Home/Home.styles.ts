import styled from "styled-components";
import { darken } from "polished";
import { convertPixelsToRem } from "../../utils";

export interface ICompleted {
  completed: boolean;
}

export const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NewTaskContainer = styled.div`
  margin-top: ${convertPixelsToRem(-27)};
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TaskInput = styled.input`
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

export const NewTaskButton = styled.button`
  cursor: pointer;
  width: ${convertPixelsToRem(90)};
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

export const TasksCreatedAndCompletedContainer = styled.div`
  max-width: ${convertPixelsToRem(736)};
  width: 100%;
  margin-top: ${convertPixelsToRem(60)};
  border-bottom: 1px solid ${({ theme }) => theme["gray-300"]};
  display: flex;
  justify-content: space-between;
  padding-bottom: ${convertPixelsToRem(20)};
`;

const BaseIndicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${convertPixelsToRem(20)};
`;

const BaseNumbersIndicators = styled.div`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme["gray-400"]};
  border-radius: 8px;
`;

export const CreatedTasks = styled(BaseNumbersIndicators)``;
export const CompletedTasks = styled(BaseNumbersIndicators)``;

export const IndicatorsStartContainer = styled(BaseIndicators)`
  color: ${({ theme }) => theme["blue-dark"]};
`;

export const IndicatorsFinishContainer = styled(BaseIndicators)`
  color: ${({ theme }) => theme["purple-dark"]};
`;

export const ScrollableContainer = styled.div`
  max-width: ${convertPixelsToRem(736)};
  width: 100%;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme["gray-300"]};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme["gray-700"]};
  }
`;

export const TaskListContainer = styled.div`
  margin-top: 10px;
  display: grid;
  min-height: 150px;
  align-content: flex-start;
  height: calc(100vh - 360px);
  overflow: auto;
  gap: 10px;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
`;

export const EmptyTaskListContainer = styled.div`
  margin-top: ${convertPixelsToRem(60)};
  display: flex;
  flex-direction: column;

  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${convertPixelsToRem(20)};
    line-height: 140%;

    strong {
      color: ${({ theme }) => theme["gray-300"]};
    }

    p {
      color: ${({ theme }) => theme["gray-300"]};
    }
  }
`;

export const TaskContainer = styled.div`
  background-color: ${({ theme }) => theme["gray-500"]};
  border-radius: ${convertPixelsToRem(8)};
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${convertPixelsToRem(20)};
  padding-right: ${convertPixelsToRem(15)};
  color: ${({ theme }) => theme.white};

  input[type="checkbox"] {
    width: ${convertPixelsToRem(20)};
    height: ${convertPixelsToRem(20)};
    border-radius: 50% !important;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme["gray-300"]};
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${convertPixelsToRem(10)};
  }
`;

export const TaskName = styled.p<ICompleted>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;
